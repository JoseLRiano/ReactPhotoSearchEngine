import axios from "axios";

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID nVK3XXNRjpQ_eTTgJyJsuDr5KR3kPf2_4ofaTG4Zat8'
    }
});

