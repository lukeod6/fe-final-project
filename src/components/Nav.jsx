import {Link} from "react-router-dom";

export default function Nav () {
    return (
        <div>
            <nav className="navbar">
                <Link className="nav-item"to="/">Home</Link>
                <Link className="nav-item" to="/users">Users</Link>
                <div className="subnav">
                    <button className="subnavbtn">Categories </button>
                    <div className="subnav-content">
                        <button className="category-button">Strategy</button>
                        <button className="category-button">Hidden Roles</button>
                        <button className="category-button">Dexterity</button>
                        <button className="category-button">Push Your Luck</button>
                        <button className="category-button">Roll and write</button>
                        <button className="category-button">Deck building</button>
                        <button className="category-button">Engine building</button>
                    </div>
                </div>
                <Link className="nav-item" to="/login">Login</Link>
            </nav>
        </div>
    );
};

