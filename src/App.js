import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import Login from "./components/Login";
import ReviewPage from "./components/ReviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";


function App() {

  const [category, setCategory] = useState('');
  const [reviewId, setReviewId] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState([]);

  return (
      <BrowserRouter>
        <div className="App">`
            <Header />
            <Nav setCategory={setCategory}/>
            <Routes>
                <Route path="/" element={<Home category={category} reviewId={reviewId} setReviewId={setReviewId} reviews={reviews} setReviews={setReviews} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>} />
                <Route path="/reviews/:reviewId" element={<ReviewPage reviewId={reviewId} setReviewId={setReviewId} reviews={reviews} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>} />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
