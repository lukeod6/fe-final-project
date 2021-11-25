

export default function ReviewPage ({selectedReview}) {

    return (
        <>
            <ul>
                        <div id="review-card">
                            <li className="review" id="img-holder" key={selectedReview.review_img_url}> <img id="review-img" src={selectedReview.review_img_url}  alt={selectedReview.review_img_url}/></li>
                            <li className="review-info item" id="review-name" key={selectedReview.title}>{selectedReview.title} </li>
                            <li className="review-info item" id="full-review-description" key={selectedReview.review_body}>{selectedReview.review_body}</li>
                            <li className="review-info item" id="review-designer" key={selectedReview.designer}>Designer: {selectedReview.designer}</li>
                        </div>
            </ul>
        </>
    );
};