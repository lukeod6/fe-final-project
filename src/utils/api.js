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

export const getReviewByCategory = (category) => {
    return reviewApi.get(`/reviews?category=${category}`).then((res) => {
        return res.data.reviews;
    }).catch(function (error) {
        console.log(error);
    })
};

export const getCommentsByReview = (id) => {
    return reviewApi.get(`/reviews/${id}/comments`).then((res) => {
        console.log(res.data.comments, 'ran in api')
        return res.data.comments;
    }).catch(function (error) {
        console.log(error);
    })
};