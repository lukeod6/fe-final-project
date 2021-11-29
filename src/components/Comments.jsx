import {addVoteForCommentById, getCommentsByReview} from "../utils/api";
import {useEffect, useState} from "react";


export default function Comments ({reviewId, setReviewVoteCount, selectedReview}) {

    const [comments, setComments] = useState([]);
    const [selectedComment, setSelectedComment] = useState([]);
    const [commentVoteCount, setCommentVoteCount] = useState(0);

    useEffect(() => {
        getCommentsByReview(reviewId).then((commentData) => {
            setComments(commentData);
        });
    }, [reviewId]);

    useEffect(() => {
        addVoteForCommentById(selectedComment.comment_id, 1).then((vote) => {
            setReviewVoteCount(vote);
        });
    }, [selectedReview.votes]);

    const handleCommentVoteClick = () => {
        setCommentVoteCount(() => selectedComment.votes ++);
    };

    return (
        <>
            <h2 id="comment-heading">Comments</h2>
            <form id="comment-input-form">
                <label id="comment-input-label" htmlFor="comment">Enter a new comment: </label>
                <textarea id="comment-input-box" name="comment" rows="4" cols="50"/>
                <input id="comment-submit-button" type="submit" value="Submit" />
            </form>
            <ul>
                {comments.map((comment) => {
                    return (
                        <div id="review-comment-box">
                            <li className="comment" id="comment-author">{comment.author}</li>
                            <li className="comment" id="comment-body">{comment.body}</li>
                            <li className="comment" id="comment-votes"> Votes {comment.votes} <button onClick={ () => {
                                setSelectedComment(comment)
                                handleCommentVoteClick()
                            }}>⬆️</button></li>
                        </div>
                    )
                })}
            </ul>
        </>
    );
};