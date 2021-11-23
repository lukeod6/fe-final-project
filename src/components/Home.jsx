import ReviewCard from "./ReviewCard";
import {getReviews} from "../utils/api";
import {useEffect} from "react";


export default function Home () {
    useEffect(() => {
        getReviews().then((reviews) => {
            console.log(reviews);
        });
    }, [])

    return (
        <>
            <ReviewCard />
        </>
    );
};