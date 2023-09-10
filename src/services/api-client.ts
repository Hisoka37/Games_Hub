import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'8f9577be70374478b3030b325bee9625'
    },
})

