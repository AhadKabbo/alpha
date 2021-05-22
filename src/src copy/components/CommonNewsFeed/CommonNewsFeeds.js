
import React, { useState, useEffect } from "react"
import { fb } from '../../../service';
import { useAuth } from "../../../hooks"
import {Button, Row, Col, Card, Container, Carousel, CarouselItem} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faComment, faLaugh } from "@fortawesome/free-solid-svg-icons";




// const db = app.firestore();

export default function CommonNewsFeeds() {
  // const { currentUser } = useAuth()
  const { authUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [chat, setChatUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await fb.firestore.collection("users")
      .orderBy("createdAt", "asc").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      ); 
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = await fb.firestore.collection("chatUsers").get();
      setChatUsers(usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
    fetchData();
  }, []); 


  const logedUser = chat.filter(obj => {
    return obj.userId === authUser.uid; 
  })



  return (
    <>
    
    <Card style={{ }}>
      <Card.Body>
      <Card.Title className ="d-flex align-items-center justify-content-center" style={{ padding: "10px" }} ><strong> HOME News Feeds</strong></Card.Title>
      <br/>
      <br/>
      <Carousel>
      <CarouselItem>
        
      {users.map(user => (
            <Container className="grid" style={{ padding: "10px" }} >
            <Card  style={{ padding: "10px", maxHeight:"40rem", maxWidth:"30rem", }}>
            <Card.Img src={user.avatar} alt={user.name} /> 

            {logedUser.map(user => ( 
                <Card.Title style={{marginTop: "25px", fontSize:"30px", fontWeight:"bold"}}>
                {user.userName}</Card.Title>
              ))}
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
        
      </Row>
    </Card> 
            </Card>
            </Container>
          ))}</CarouselItem>
           </Carousel>
      </Card.Body>
      </Card>
    </>
  )
}
