import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import Login from "./components/Login";
import ReviewPage from "./components/ReviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
