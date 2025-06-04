import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app, auth, db } from '../firebaseConfig';
import { checkEmailExists, setAuthWith } from './Auth';
import { doc, setDoc } from 'firebase/firestore';

export async function Cadastro(email, senha, displayName, setAuth) {

    if (await checkEmailExists(email)) {
        return { success: false, message: 'E-mail já cadastrado.' };
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

        await updateProfile(userCredential.user, {
            displayName: displayName
        });

        setAuthWith(auth.user, setAuth)

        await setDoc(doc(db, "users", userCredential.user.uid), {
            name: displayName,
            emailOriginal: email, 
            createdAt: new Date()
        });
        return {
            success: true,
            user: userCredential
        };

    } catch (error) {

        return error;
    }
}
