import ReviewCard from "./ReviewCard";


export default function Home ({category, setReviews, reviews, reviewId, setReviewId, setSelectedReview, selectedReview}) {


    return (
        <>
            <ReviewCard category={category} reviewId={reviewId} setReviewId={setReviewId}  reviews={reviews} setReviews={setReviews} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>
        </>
    );
};