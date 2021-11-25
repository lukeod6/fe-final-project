import {Link} from "react-router-dom";

export default function Nav ({setCategory}) {
    return (
        <div>
            <nav className="navbar">
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/users">Users</Link>
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
                <Link className="nav-item" to="/login">Login</Link>
            </nav>
        </div>
    );
};

