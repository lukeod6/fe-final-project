import axios from 'axios';

const reviewApi = axios.create({
    baseURL: "https://luke-nc-games-api.herokuapp.com/api",
});

export const getReviews = () => {
    return reviewApi.get('/reviews').then((res) => {
        return res.data;
    }).catch(function (error) {
        console.log(error);
    })
};