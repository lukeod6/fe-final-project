import {Link} from "react-router-dom";


export default function ReviewPage (props) {

    const review = props.selectedReview


    return (
        <>
            <ul>
                        <div id="review-card">
                            <li className="review" id="img-holder" key={review.review_img_url}> <img id="review-img" src={review.review_img_url}  alt={review.review_img_url}/></li>
                            <li className="review-info item" id="review-name" key={review.title}>{review.title} </li>
                            <li className="review-info item" id="full-review-description" key={review.review_body}>{review.review_body}</li>
                            <li className="review-info item" id="review-designer" key={review.designer}>Designer: {review.designer}</li>
                        </div>
            </ul>
        </>
    );
};