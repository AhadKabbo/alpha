import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, CardImg } from 'react-bootstrap';
// import { useAuthHome } from "../../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom';
import { fb } from '../../../service';
import { useAuth } from '../../../hooks';
// const db = app.firestore();

const Profile = ({ alt, img }) => {
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
      {nameFilter.map(user => (
        <Card style={{ padding: '3px', maxHeight: '30rem', maxWidth: '20rem' }}>
          <Card.Body>
            <Card
              style={{
                marginLeft: '1.5rem',
                width: '180px',
                height: '180px',
                borderRadius: '100%',
                overflow: 'hidden',
              }}
            >
              <CardImg src={img} alt={alt} />
            </Card>

            <Card.Title
              style={{
                marginTop: '25px',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              {user.userName} {error && <Alert variant="danger">{error}</Alert>}
            </Card.Title>

            {/* <Card.Text auto >
          <strong>Email:</strong> khan@gmail.com
         </Card.Text> */}

            <Link
              to="/"
              className="btn btn-primary w-100 mt-3"
              onClick={() => fb.auth.signOut()}
            >
              Log Out
            </Link>

            {/* <div className="btn btn-primary w-100 mt-3">
              <Button variant="link" onClick={() => fb.auth.signOut()}>
                Log Out
              </Button>
            </div> */}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
export default Profile;
{
  /* <Link to="/"  className="sign-out" name="sign out">
              
<Icon 
 
  className="sign-out"
  name="sign out"
/>
</Link> */
}
