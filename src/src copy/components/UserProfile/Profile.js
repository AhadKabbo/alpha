import React, { useState, useEffect } from 'react';
import { Card, Alert, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fb } from '../../../service';
import { useAuth, useResolved } from '../../../hooks';

const Profile = ({ alt, img }) => {
  const [error, setError] = useState('');
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const [chatData, setUsers] = React.useState([]);
  // const history = useHistory();

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
      {authUser.uid === 'pFzj469YxJh8GyFjJdadW5s3rWF3' ? (
        <>
          {nameFilter.map(user => (
            <Card
              className="shadow p-3 mb-5 bg-white rounded"
              style={{
                marginTop: '3rem',
                // marginLeft: '3rem',
                padding: '3px',
                maxHeight: '30rem',
                maxWidth: '20rem',
              }}
            >
              <Card.Body>
                <Card
                  style={{
                    // marginLeft: '-0.6rem',
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
                  style={{
                    color: '#040404',
                    background: '#1cc7d9',
                  }}
                  to="/"
                  className="btn btn-primary w-100 mt-3"
                  onClick={() => fb.auth.signOut()}
                >
                  Log Out
                </Link>
                <Link
                  style={{
                    color: '#040404',
                    background: '#1cc7d9',
                  }}
                  to="/admin"
                  className="btn btn-primary w-100 mt-3"
                >
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
              className="shadow p-3 mb-5 bg-white rounded"
              style={{
                marginTop: '3rem',
                // marginLeft: '3rem',
                padding: '3px',
                maxHeight: '30rem',
                maxWidth: '20rem',
              }}
            >
              <Card.Body>
                <Card
                  style={{
                    marginLeft: '-0.6rem',
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
                  style={{
                    color: '#040404',
                    background: '#1cc7d9',
                  }}
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
