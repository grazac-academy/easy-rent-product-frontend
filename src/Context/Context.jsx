import { createContext, useReducer, useContext } from 'react';
import { bookmarkReducer } from './Reducer';
import apartments from '../Constant/';

const bookmark = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(bookmarkReducer, {
    apartments: apartments,
    bookmark: [],
  });
  return <bookmark.Provider value = {{state, dispatch}}>{children}</bookmark.Provider>;
};
export const BookmarkState = () => {
  return useContext(bookmark);
};
export default Context;
