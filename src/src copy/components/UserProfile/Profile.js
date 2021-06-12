import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, CardImg } from 'react-bootstrap';
// import { useAuthHome } from "../../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom';
import { fb } from '../../../service';
import { useAuth, useResolved } from '../../../hooks';
// const db = app.firestore();

const Profile = ({ alt, img }) => {
  const [error, setError] = useState('');
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const [chatData, setUsers] = React.useState([]);
  const history = useHistory();

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

  return authResolved ? (
    <>
      {authUser.uid === '6zFrfJd0wiUrwjLzeYKrl8xMAqP2' ? (
        <>
          {nameFilter.map(user => (
            <Card
              style={{
                marginTop: '3rem',
                padding: '3px',
                maxHeight: '30rem',
                maxWidth: '20rem',
              }}
            >
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
                  <CardImg src={user.avatar} alt={alt} />
                </Card>

                <Card.Title
                  style={{
                    marginTop: '25px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  {user.userName}{' '}
                  {error && <Alert variant="danger">{error}</Alert>}
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
                <Link to="/admin" className="btn btn-primary w-100 mt-3">
                  Go to Admin page
                </Link>
              </Card.Body>
            </Card>
          ))}
        </>
      ) : (
        <>
          {nameFilter.map(user => (
            <Card
              style={{
                marginTop: '3rem',
                padding: '3px',
                maxHeight: '30rem',
                maxWidth: '20rem',
              }}
            >
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
                  <CardImg src={user.avatar} alt={alt} />
                </Card>

                <Card.Title
                  style={{
                    marginTop: '25px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  {user.userName}{' '}
                  {error && <Alert variant="danger">{error}</Alert>}
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
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </>
  ) : (
    <>Loading...</>
  );
};
export default Profile;
