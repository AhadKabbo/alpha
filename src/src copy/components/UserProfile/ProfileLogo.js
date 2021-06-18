import React, { useState, useEffect } from 'react';
import { Card, Alert, CardImg } from 'react-bootstrap';
import { fb } from '../../../service';
import { useAuth, useResolved } from '../../../hooks';

const ProfileLogo = ({ alt, img }) => {
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
              style={{
                // marginLeft: '-0.6rem',
                width: '3rem',
                height: '3rem',
                borderRadius: '100%',
                overflow: 'hidden',
              }}
            >
              <CardImg src={user.avatar} alt={alt} />
            </Card>
          ))}
        </>
      ) : (
        <>
          {nameFilter.map(user => (
            <Card
              style={{
                // marginLeft: '-0.6rem',
                width: '3rem',
                height: '3rem',
                borderRadius: '100%',
                overflow: 'hidden',
              }}
            >
              <CardImg src={user.avatar} alt={alt} />
            </Card>
          ))}
        </>
      )}
    </>
  ) : (
    <>Loading...</>
  );
};
export default ProfileLogo;
