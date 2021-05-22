import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Subtitle, ImgWrap, Img} from './CenteredContainer2'
import React, { useState, useEffect } from "react"
import Profile from "../UserProfile/Profile"
import ProfileFeedsCopy from "../UserProfile/ProfileFeedsCopy"
import { app } from "../../firebase";
import NavbarPage from "../Navbar/indexPage"
import Sidebar from '../SideBar/index';
// import CommonNewsFeeds from '../CommonNewsFeed/CommonNewsFeeds';
// import Folder from "../UserProfile/Folder"
// import CenteredContainer from "../authentication/CenteredContainer"
// import Signup from "../authentication/Signup"
import { homeObjProfile } from "../Info/Data";
import {Container, Card, CardColumns} from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
// import ProfileFeeds from "../UserProfile/ProfileFeeds";
const db = app.firestore();

const User = ({lightBg}) => {
  const { currentUser } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [users, setUsers] = React.useState([]);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }



  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {

          return doc.data();
        })
      ); 
    };
    fetchUsers();
  }, []);

  const logedUser = users.filter(obj => {
    return obj.userId === currentUser.uid; 
  })

  return (
    <>
      <NavbarPage  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    

    <Container style={{ marginTop: '6rem' }}>
    <CardColumns>
      <Card style={{ width: '20rem', height: '27rem'}} >
        <Profile {...homeObjProfile}/>
      </Card>
      
      <Card style={{ width: '45.7rem', height: '27rem'}}>
        <ProfileFeedsCopy />
      </Card>
    </CardColumns>
      
    

    
      <Card style={{ width: ''}}>
        <Card style={{ marginTop: '1rem', width: '50rem' }}>
      <Card.Body>
      <strong>Profil Feeds</strong>
      <br/>
      <br/>
      {logedUser.map((user) => {
          return (
            <InfoContainer lightBg={lightBg}>
              <InfoWrapper>
              <InfoRow >
              <Column1>
            <Card style={{ width: '5rem', height: '5rem'}}>
            <ImgWrap>
            <Img src={user.avatar} alt={user.name} />
            </ImgWrap>
              </Card>
            </Column1>

            <Column2>
            <TextWrapper>
            <Subtitle >
              <p>{user.name}</p> 
            </Subtitle>
            </TextWrapper>
            </Column2>
            </InfoRow>
            </InfoWrapper>
            </InfoContainer>
          );
        })}
    
      </Card.Body>
      </Card>
      </Card>
    
    </Container>
    </>
  )
}
export default User;
