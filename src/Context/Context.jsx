import { createContext, useReducer, useContext } from 'react';
import { bookmarkReducer } from './Reducer';
import Array from '../Constant/Array';

const Bookmark = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(bookmarkReducer, {
    apartments: Array,
    bookmark: [],
  });
  return <Bookmark.Provider value = {{state, dispatch}}>{children}</Bookmark.Provider>;
};
export default Context;
export const BookmarkState = () => {
  return useContext(Bookmark);
};
