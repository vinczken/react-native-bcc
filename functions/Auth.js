import AsyncStorage from "@react-native-async-storage/async-storage"
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


export const setAuthWith = async (userData, setAuth) => {
    setAuth({
        uid: userData.uid,
        email: userData.email,
        displayName: userData.displayName || 'Usuário',
    })

    console.log(userData);
    await AsyncStorage.setItem('@auth_data', JSON.stringify(userData));

}

export const getLoggedInAuth = async (setAuth) => {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe(); // evitar múltiplas execuções
            resolve(user || null);
        });
    });
}

export const checkEmailExists = async (email) => {
    const docSnap = await getDoc(doc(db, 'users', email));
    return docSnap.exists() ? true : false
}

import {
    getAuth,
    updateProfile,
    updateEmail,
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential
} from 'firebase/auth';


const updateDisplayName = async (newName) => {
    try {
        await updateProfile(auth.currentUser, {
            displayName: newName
        });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const updateUserEmail = async (newEmail, currentPassword) => {
    try {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(
            user.email,
            currentPassword
        );

        // Reautenticação necessária para mudar email
        await reauthenticateWithCredential(user, credential);
        await updateEmail(user, newEmail);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// Função para atualizar senha
const updateUserPassword = async (newPassword, currentPassword) => {
    try {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(
            user.email,
            currentPassword
        );

        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const deleteAuth = async (senha) => {
    try {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(
            user.email,
            senha // Requer a senha atual para deletar
        );

        await reauthenticateWithCredential(user, credential);
        await user.delete();
        await AsyncStorage.removeItem('@auth_data');
        alert('Conta deletada com sucesso');
    } catch (error) {
        alert(`Erro ao deletar conta: ${error.message}`);
    }
};