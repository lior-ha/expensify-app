import { firebase, providers} from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (provider) => {
    return () => {
        return firebase.auth().signInWithPopup(providers[provider]);
    }
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};