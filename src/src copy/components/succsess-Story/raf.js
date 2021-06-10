import React, { useState, useEffect } from 'react';
import { Card, Container, Button, Alert, CardImg } from 'react-bootstrap';
// import { useAuthHome } from "../../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom';
import { fb } from '../../../service';
import { useAuth } from '../../../hooks';
// const db = app.firestore();

const AboutMe = ({ alt, img }) => {
  const [error, setError] = useState('');
  // const { logout } = useAuthHome()
  const { authUser } = useAuth();
  const [chatData, setUsers] = React.useState([]);
  const history = useHistory();

  // const currentId = 'hDBz9DV8gnbOQSF2GjzZaSE2FUu2' ;
  // // console.log(authUser.uid)

  // async function handleLogout() {
  //   setError("")
  //   try {
  //     await logout()
  //     history.push("/login")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = await fb.firestore.collection('chatUsers').get();
      setUsers(
        usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
      );
    };
    fetchData();
  }, []);

  const nameFilter = chatData.filter(obj => {
    return obj.signupUserId === authUser.uid;
  });

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center "
      >
        <Card
          style={{
            marginTop: '3rem',
            // minHeight: '20rem',
            minWidth: '20rem',
            height: 'auto',
            maxWidth: '60rem',
          }}
        >
          <Card.Body
            style={{
              // minHeight: '10rem',
              minWidth: '10rem',
              height: 'auto',
              maxWidth: '60rem',
            }}
          >
            <CardImg
              style={{
                borderRadius: '1%',
                minHeight: '10rem',
                minWidth: '10rem',
                maxHeight: '30rem',
                maxWidth: '30rem',
              }}
              src="img/kabbo.jpg"
              alt={alt}
            />

            <Card.Title
              className="d-flex align-items-center justify-content-center "
              style={{
                marginTop: '3rem',
                marginBottom: '5rem',
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              {' '}
              Mohammad Ahad Hosain (kABBO)
              {} {error && <Alert variant="danger">{error}</Alert>}
            </Card.Title>

            <Card.Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default AboutMe;
