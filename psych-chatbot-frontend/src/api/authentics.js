import { signOut } from "firebase/auth";
import { auth, googleProvider, signInWithPopup } from "../configs/firebase";

async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const idToken = await user.getIdToken();
        return { user, idToken };
    } catch (error) {
        throw error;
    }
};
async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
};

export default { loginWithGoogle, logout };
