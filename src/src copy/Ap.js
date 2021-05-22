import React from "react";
import { Card,Carousel } from "react-bootstrap";
import "./App.css";
// import firebase from "./firebase";
import { fb } from '../service';
import { SpellInput } from "./SpellInput";

export default function Ap() {
  const [users, setSpells] = React.useState([]);
  // const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      // const db = firebase.firestore();
      const data = await fb.firestore.collection("users").get();
      setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  // const onCreate = () => {
  //   const db = firebase.firestore();
  //   db.collection("users").add({ name: newSpellName });
  // };

  return (
    <>
     {users.map(user=> (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={user.avatar}
      alt={user.name}
    />
    <Carousel.Caption>
    {user.name}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={user.avatar}
      alt={user.name}
    />
    <Carousel.Caption>
    {user.name}
    </Carousel.Caption>
  </Carousel.Item>

    </Carousel>
    ))}
    
    </>
  );
}

