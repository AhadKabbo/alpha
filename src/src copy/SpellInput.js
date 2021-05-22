import React from "react";
import firebase from './firebase'

export const SpellInput = ({ user }) => {
  const [name, setName] = React.useState(user.name);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('users').doc(user.id).set({...user, name})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('users').doc(user.id).delete()
  }

  return (
    <>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Updat</button>
      <button onClick={onDelete}>Delet</button>
    </>
  );
};