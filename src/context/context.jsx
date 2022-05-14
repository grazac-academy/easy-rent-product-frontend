import { createContext, useReducer, useContext, useState } from 'react';
import { bookmarkReducer } from './reducer';
import apartments from 'constant';


const bookmark = createContext();

const Context = ({children}) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, dispatch] = useReducer(bookmarkReducer, {
    apartments: apartments,
    bookmark: [],
    isLoggedIn: false
  });
  return (
    <bookmark.Provider value={{ state, dispatch }}>
      {children}
    </bookmark.Provider>
  );
};
export const useBookmarkState = () => {
  return useContext(bookmark);
};
export default Context;
