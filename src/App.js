import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import ReviewPage from "./components/ReviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import { UserContext } from './contexts/User';


function App() {

  const [category, setCategory] = useState('');
  const [reviewId, setReviewId] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState([]);
  const [user, setUser] = useState({
      username: "tempUser",
      name: "Tempy",
      avatar_url: "https://content.knownorigin.io/network/mainnet/edition/212150/asset.jpeg"
  });

  return (
      <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <div className="App">`
                <Header />
                <Nav setCategory={setCategory}/>
                <Routes>
                    <Route path="/" element={<Home category={category} reviewId={reviewId} setReviewId={setReviewId} reviews={reviews} setReviews={setReviews} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>} />
                    <Route path="/reviews/:reviewId" element={<ReviewPage reviewId={reviewId} setReviewId={setReviewId} reviews={reviews} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
          </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
