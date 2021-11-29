import {useEffect, useState} from "react";
import {addVoteForReviewById} from "../utils/api";
import Comments from "./Comments";


export default function ReviewPage ({selectedReview, reviewId}) {

    const [reviewVoteCount, setReviewVoteCount] = useState(0);

    useEffect(() => {
        addVoteForReviewById(reviewId, 1).then((vote) => {
            setReviewVoteCount(vote);
        });
    }, [selectedReview.votes]);


    const handleReviewVoteClick = () => {
        setReviewVoteCount(() => selectedReview.votes ++);
    };

    return (
        <>
            <ul>
                <div id="review-card">
                    <li className="review" id="img-holder" key={selectedReview.review_img_url}> <img id="review-img" src={selectedReview.review_img_url}  alt={selectedReview.review_img_url}/></li>
                    <li className="review-info" id="review-name" key={selectedReview.title}>{selectedReview.title} </li>
                    <li className="review-info" id="full-review-description" key={selectedReview.review_body}>{selectedReview.review_body}</li>
                    <li className="review-info" id="review-designer" key={selectedReview.designer}>Designer: {selectedReview.designer}</li>
                    <li className="review-info" id="review-votes" key={selectedReview.category}>votes: {selectedReview.votes} <button onClick={handleReviewVoteClick}>⬆️</button></li>
                </div>
            </ul>
            <Comments reviewId={reviewId} setReviewVoteCount={setReviewVoteCount} selectedReview={selectedReview}/>
        </>
    );
};