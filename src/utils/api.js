import axios from 'axios';

const reviewApi = axios.create({
    baseURL: "https://new-nc-games.herokuapp.com/api",
});

export const getReviews = () => {
    return reviewApi.get('/reviews').then((res) => {
        return res.data.reviews;
    }).catch(function (error) {
        console.log(error);
    })
};

export const getReviewById = (id) => {
    return reviewApi.get(`/reviews/${id}`).then((res) => {
        return res.data.review;
    }).catch(function (error) {
        console.log(error);
    })
};