import { useState, useEffect } from 'react';
import { useResolved, useAuth } from 'hooks';
// The purpose of this hook is to be able to determine whether
// or not a value that is initialized as undefined has been
// updated to the expected data type. For example, if a
// component has a state variable that is declared without an
// initial value, but you expect that value to appear at some point..
// you can use this hook to determine when the value is no longer undefined.
// This is especially helpful with auth.





export const useAuthCurrent = () => {
  const [currenId, setUsers ] = useState();
  const [ currentNull, setChatUsers] = useState();;



  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);


  if (authResolved ) 
  {return setUsers = authUser.uid }
    
  console.log(currenId);

  return {
    currenId,
    

    
  };
};
