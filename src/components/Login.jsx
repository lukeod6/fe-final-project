import { UserContext } from '../contexts/User';
import {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {addNewUser} from "../utils/api";

export default function Login () {

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        addNewUser(user.username, user.name, user.avatar_url).then((userData) => {
            console.log(userData);
        });
    }, [user]);

    function handleChange(event) {
        const value = event.target.value;
        setUser({...user, [event.target.name]: value
        });
    }

    // console.log(user.username, user.name, user.avatar_url)

    return (
        <>
            <p className="login" id="login-instructions">
                Please enter a username
            </p>
            <form className="login">
                <input id="login-input" type="text" name="username" value={user.username} onChange={handleChange}/>
                <input id="login-input" type="text" name="name" value={user.name} onChange={handleChange}/>
                <input id="login-input" type="text" name="avatar_url" value={user.avatar_url} onChange={handleChange}/>
                <Link to="/">
                    <input id="login-button" type="submit" value="Submit"/>
                </Link>
            </form>
        </>
    );
};