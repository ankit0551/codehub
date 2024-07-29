import {create} from 'zustand';

let curruser = localStorage.getItem('_l_user');
const useStore = create((set) => ({
    user : curruser ?  JSON.parse(curruser) : null,
    token : "",
    chat : [],
    setUser : (newUser) => set({user: newUser}),
    setToken : (newToken) => set({token : newToken}),
    setChat : (newChat) => set((state)=> ({chat : [...state.chat, newChat]})),
}))

export default useStore;