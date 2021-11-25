import {useEffect, useState} from "react";
import {getCommentsByReview} from "../utils/api";


export default function ReviewPage ({selectedReview, reviewId}) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getCommentsByReview(reviewId).then((commentData) => {
            setComments(commentData);
            console.log(comments, 'in app')
        });
    }, [selectedReview]);

    console.log(comments, 'after process');

    return (
        <>
            <ul>
                        <div id="review-card">
                            <li className="review" id="img-holder" key={selectedReview.review_img_url}> <img id="review-img" src={selectedReview.review_img_url}  alt={selectedReview.review_img_url}/></li>
                            <li className="review-info item" id="review-name" key={selectedReview.title}>{selectedReview.title} </li>
                            <li className="review-info item" id="full-review-description" key={selectedReview.review_body}>{selectedReview.review_body}</li>
                            <li className="review-info item" id="review-designer" key={selectedReview.designer}>Designer: {selectedReview.designer}</li>
                            {/*<button id="read-full-button" onClick={*/}
                            {/*    getCommentsByReview(reviewId).then((commentData) => {*/}
                            {/*        setComments(commentData);*/}
                            {/*    })*/}
                            {/*}>*/}
                            {/*</button>*/}
                        </div>
            </ul>
            <ul>
                {comments.map((comment) => {
                    return (
                        <div id="review-comment-box">
                            <li> {comment.author}</li>
                            <li> {comment.body}</li>
                            <li> {comment.votes}</li>
                        </div>
                    )
                })}
            </ul>
        </>
    );
};