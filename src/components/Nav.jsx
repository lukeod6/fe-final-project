import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../contexts/User";

export default function Nav ({setCategory}) {

    const {user} = useContext(UserContext);

    return (
        <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/login" id="user-in-nav">{user.username}</Link>
                <div className="subnav">
                    <button className="subnavbtn">Categories </button>
                    <div className="subnav-content">
                        <button className="category-button" onClick={() => setCategory("strategy") }>Strategy</button>
                        <button className="category-button" onClick={() => setCategory("hidden-roles") }>Hidden Roles</button>
                        <button className="category-button" onClick={() => setCategory("dexterity") }>Dexterity</button>
                        <button className="category-button" onClick={() => setCategory("push-your-luck") }>Push Your Luck</button>
                        <button className="category-button" onClick={() => setCategory("roll-and-write") }>Roll and write</button>
                        <button className="category-button" onClick={() => setCategory("deck-building") }>Deck building</button>
                        <button className="category-button" onClick={() => setCategory("engine-building") }>Engine building</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};
