import { createContext, useReducer, useContext, useState } from 'react';
import { bookmarkReducer } from './reducer';
import apartments from 'constant';

const UserContext = createContext();

const Context = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [houses, setHouses] = useState(null);
  const [state, dispatch] = useReducer(bookmarkReducer, {
    apartments: apartments,
    bookmark: [],
  });
  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        houses,
        setHouses,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default Context;
export const useContextState = () => {
  return useContext(UserContext);
};
