import {getReviewById, getReviews} from "../utils/api";
import {useEffect} from "react";
import {Link} from "react-router-dom";


export default function ReviewCard (props) {


    useEffect(() => {
        getReviews().then((reviews) => {
            props.setReviews(reviews);
        });
    }, [props.reviews]);

    useEffect(() => {
        getReviewById(props.reviewId).then((review) => {
            props.setReviewId(review.review_id);
        });
    }, [props.reviewId]);

    return (
        <>
            <ul>
                {props.reviews.map((review) => {
                    return (
                        <div id="review-card">
                            <li className="review" id="img-holder" key={review.review_img_url}> <img id="review-img" src={review.review_img_url}  alt={review.review_img_url}/></li>
                            <li className="review-info item" id="review-name" key={review.title}>{review.title} </li>
                            <li className="review-info item" id="review-description" key={review.review_body}>{review.review_body}</li>
                            <li className="review-info item" id="review-designer" key={review.designer}>Designer: {review.designer}</li>
                            <li className="review-info item" id="review-category" key={review.category}>Category: {review.category}</li>
                            <li className="review-info item" id="review-id" key={review.review_id}>id: {review.review_id}</li>
                            <Link to={{pathname: `reviews/${review.review_id}`}} className="review-info item">
                            <button id="read-full-button" onClick={() => {
                                props.setReviewId(review.review_id);
                                props.setSelectedReview(review)
                            }}>Read full review</button>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </>
    );
};