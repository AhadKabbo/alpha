
import React, { useEffect } from "react"
import { fb } from '../../../service';
import {Button, Row, Col, Card, Container} from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";
import { useAuth } from "../../../hooks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faComment, faLaugh } from "@fortawesome/free-solid-svg-icons";
import { DeleteBtn } from "./DeleteBtn";

// const fb.firestore = app.firestore();

export default function PersonalFeeds () {
  const { authUser } = useAuth()
  // const { currentUser } = useAuth()
  const [usersF, setUsers] = React.useState([]);


useEffect(() => {
    const fetchData = async () => {
      const usersCollection = await fb.firestore.collection("users").get();
      setUsers(usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
    fetchData();
  }, []); 

  // const onDelete = () => {
    
  //   fb.firestore.collection("users").doc(user.id).delete()
  // }


  const logedUser = usersF.filter(obj => {
    return obj.userId === authUser.uid; 
  })

  return (
    <>
    <Card style={{ }}>
      <Card.Body>
      <strong>Profil Feeds</strong>
      <br/>
      <br/>
      {logedUser.map(user => (
            <Container className="d-flex align-items-center justify-content-center" style={{ padding: "10px" }} >
            <Card  style={{ padding: "10px", maxHeight:"40rem", maxWidth:"30rem", }}>
            <Card.Img src={user.avatar} alt={user.name} /> 



            <Card className ="overflow-auto" style={{ padding: "10px", marginTop: '1rem', marginBottom: '1rem' }}>
            <Card.Text style={{ padding: "10px" }}>{user.name}</Card.Text> </Card>
            
    <Card style={{ padding: "10px" }}>     
      <Row  >
        <Col>
        <Button className="w-100 " variant="outline-success"  size="sm">
            <FontAwesomeIcon icon={faLaugh} />
        </Button>
        </Col>
        
        <Col >
        <Button className="w-100 " variant="outline-success"  size="sm">
            <FontAwesomeIcon icon={faComment} />
        </Button>
        </Col>
        <Col >
            <DeleteBtn user={user} />
        </Col>
      </Row>
    </Card> 
            </Card>
            </Container>
          ))}
      </Card.Body>
      </Card>
    </>
  )
}
