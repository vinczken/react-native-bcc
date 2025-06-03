import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setAuthWith } from './Auth';
import { app, auth } from '../firebaseConfig';

export async function Login(email, senha, setAuth) {
    if (!email.includes('@')) {
        throw new Error('Email inválido');
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        console.log(userCredential);

        setAuthWith(user, setAuth);
        
        return {
            success: true,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
