import {getReviewByCategory, getReviewById, getReviews} from "../utils/api";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {generateKey} from "../utils/generateKey";


export default function ReviewCard ({category, setReviews, reviews, reviewId, setReviewId, setSelectedReview}) {


    useEffect(() => {
        if (category === '') {
            getReviews().then((reviewData) => {
                setReviews(reviewData);
            });
        }
    }, [reviews]);

    useEffect(() => {
        if (category !== '') {
            getReviewByCategory(category).then((reviewData) => {
                setReviews(reviewData);
            });
        }
    }, [category]);

    useEffect(() => {
        getReviewById(reviewId).then((review) => {
            setReviewId(review.review_id);
        });
    }, [reviewId]);

    return (
        <>
            <ul>
                {reviews.map((review) => {
                    return (
                        <div id="review-card" key={generateKey(review.review_id)}>
                            <li className="review" id="img-holder" key={generateKey(review.review_img_url)}> <img id="review-img" src={review.review_img_url}  alt={review.review_img_url}/></li>
                            <li className="review-info" id="review-name" key={generateKey(review.title)}>{review.title} </li>
                            <li className="review-info" id="review-description" key={generateKey(review.review_body)}>{review.review_body}</li>
                            <li className="review-info" id="review-designer" key={generateKey(review.designer)}>Designer: {review.designer}</li>
                            <li className="review-info" id="review-category" key={generateKey(review.category)}>Category: {review.category}</li>
                            <li className="review-info" id="review-votes" key={generateKey(review.votes)}>votes: {review.votes}</li>
                            <Link to={{pathname: `reviews/${review.review_id}`}} className="review-info">
                            <button id="read-full-button" onClick={() => {
                                setReviewId(review.review_id);
                                setSelectedReview(review);
                            }}>Read full review</button>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </>
    );
};