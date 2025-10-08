import axios from 'axios'
const handleSearch = async (query) => {
    try {
        const url_backend = process.env.REACT_APP_URL_BACKEND
        const result = await axios.post(`${url_backend}search`, {
            query: query
        })
        return result;
    } catch (error) {
        console.error(error);
    }
};
export default handleSearch;
