import { loginWithGoogle } from "../api/Auth";

const handleLogin = async () => {

    try {
        const url_backend = process.env.REACT_APP_URL_BACKEND

        const { idToken } = await loginWithGoogle();

        const res = await fetch(`${url_backend}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id_token: idToken }),
        });

        const data = await res.json();
        console.log("Login response:", data);
    } catch (error) {
        console.error(error);
    }
};
