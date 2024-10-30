// store.js
import { atom } from 'recoil';

// Atom to store the user's name globally
export const userNameAtom = atom({
  key: 'userName', 
  default: '', 
});

// Atom to store todos data
export const todosAtom = atom({
  key: 'todos',
  default: [], 
});
