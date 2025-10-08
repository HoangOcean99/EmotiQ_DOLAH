import axios from 'axios'
const handleSearch = async (query) => {
    try {
        const url_backend = import.meta.env.VITE_APP_URL_BACKEND
        const result = await axios.post(`${url_backend}search`, {
            query: query
        })
        return result.data.results;
    } catch (error) {
        console.error("❌ Error calling API:", error.message);
        if (error.response) console.log("Response:", error.response.data);
    }
};
export default handleSearch;
