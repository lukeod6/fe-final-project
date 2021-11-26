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
        return res.data.comments;
    }).catch(function (error) {
        console.log(error);
    })
};

export const addVoteForReviewById = (id, vote) => {
    return reviewApi.patch(`/reviews/${id}`, { inc_votes: vote} ).then((res) => {
        return res.data.review.votes;
    }).catch(function (error) {
        console.log(error);
    })
};

export const addVoteForCommentById = (id, vote) => {
    return reviewApi.patch(`/comments/${id}`, { inc_votes: vote} ).then((res) => {
        return res.data.comment.votes;
    }).catch(function (error) {
        console.log(error);
    })
};

export const addCommentForReviewById = (id, reviewBody, username) => {
    return reviewApi.patch(`/reviews/${id}/comments`, {
        username: username,
            body: reviewBody
    } ).then((res) => {
        return res.data.comment;
    }).catch(function (error) {
        console.log(error);
    })
};