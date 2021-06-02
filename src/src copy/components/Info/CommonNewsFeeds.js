// import React, { useState, useEffect } from "react"
// import { app } from "../../firebase";
// import { Card,CardDeck} from "react-bootstrap";
// import { InfoContainer } from './InfoElements'

// const db = app.firestore();

//   const CommonNewsFeeds = ({ lightBg, id }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersCollection = await db.collection("users").get();
//       setUsers(
//         usersCollection.docs.map((doc) => {
//           return doc.data();
//         })
//       );
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <>
// <div className="container">
//       <div className="row">
//       <CardDeck>
// <InfoContainer lightBg={lightBg} id={id}>
//       <Card>
//       <Card.Body>
//       Profil Feeds
//       <br/>
//       <br/>

//       <ul>
//         {users.map((user) => {
//           return (
//             <li key={user.name}>
//               <img width="100" height="100" src={user.avatar} alt={user.name} />
//               <p>{user.name}</p>
//             </li>
//           );
//         })}
//       </ul>
//       </Card.Body>
//       </Card>
//       </InfoContainer>
//       </CardDeck>
//       </div>
//         </div>

//     </>
//   )
// }

// export default CommonNewsFeeds;
