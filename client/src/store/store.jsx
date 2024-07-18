import {create} from 'zustand';

let curruser = localStorage.getItem('_l_user');
const useStore = create((set) => ({
    user : curruser ?  JSON.parse(curruser) : null,
    token : "",
    setUser : (newUser) => set({user: newUser}),
    setToken : (newToken) => set({token : newToken}),
}))

export default useStore;