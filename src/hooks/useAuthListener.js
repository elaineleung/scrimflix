/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

export default function useAuthListener() {
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUser')))
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser)
        } else {
            localStorage.removeItem('authUser');
            setUser(null);
            if (history !== undefined) {
              history.push(ROUTES.HOME);
            }
        }
    });
    
    return () => listener();
}, []);

  return { user }
}