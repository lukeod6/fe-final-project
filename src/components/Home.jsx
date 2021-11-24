import ReviewCard from "./ReviewCard";


export default function Home (props) {


    return (
        <>
            <ReviewCard reviewId={props.reviewId} setReviewId={props.setReviewId}  reviews={props.reviews} setReviews={props.setReviews} selectedReview={props.selectedReview} setSelectedReview={props.setSelectedReview}/>
        </>
    );
};