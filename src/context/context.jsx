import { createContext, useReducer, useContext, useState } from 'react';
import { bookmarkReducer } from './reducer';
import apartments from 'constant';

const UserContext = createContext();

const Context = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [state, dispatch] = useReducer(bookmarkReducer, {
    apartments: apartments,
    bookmark: [],   
  });
  return (
    <UserContext.Provider value={{ state, dispatch, isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useBookmarkState = () => {
  return useContext(UserContext);
};
export default Context;
