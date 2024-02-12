import {React} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

function SignIn(){

    return(
        <div className="container">
            <form>
                <label>Username:</label>
                <input type="name" className="form-group" name="name" />
                <label>Email:</label>
                <input type="password" className="form-group" name="password" />
                <button>Log In</button>
                <Link to="about">About</Link>
            </form>
        </div>
    )
}

export default SignIn;