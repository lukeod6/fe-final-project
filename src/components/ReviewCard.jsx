import {getReviewByCategory, getReviewById, getReviews} from "../utils/api";
import {useEffect} from "react";
import {Link} from "react-router-dom";


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
                        <div id="review-card">
                            <li className="review" id="img-holder" key={review.review_img_url}> <img id="review-img" src={review.review_img_url}  alt={review.review_img_url}/></li>
                            <li className="review-info item" id="review-name" key={review.title}>{review.title} </li>
                            <li className="review-info item" id="review-description" key={review.review_body}>{review.review_body}</li>
                            <li className="review-info item" id="review-designer" key={review.designer}>Designer: {review.designer}</li>
                            <li className="review-info item" id="review-category" key={review.category}>Category: {review.category}</li>
                            <Link to={{pathname: `reviews/${review.review_id}`}} className="review-info item">
                            <button id="read-full-button" onClick={() => {
                                setReviewId(review.review_id);
                                setSelectedReview(review)
                            }}>Read full review</button>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </>
    );
};