import { createContext, useReducer, useContext, useState } from 'react';
import { bookmarkReducer } from './reducer';
import apartments from 'constant';

const Bookmark = createContext();

const Context = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, dispatch] = useReducer(bookmarkReducer, {
    apartments: apartments,
    bookmark: [],
    isLoggedIn: false,
  });
  return (
    <Bookmark.Provider value={{ state, dispatch }}>
      {children}
    </Bookmark.Provider>
  );
};
export const useBookmarkState = () => {
  return useContext(Bookmark);
};
export default Context;
