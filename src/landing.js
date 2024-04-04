import "./style.css";
import { NavLink } from 'react-router-dom';
const Landing = () => {
    return (
        <>
            <div class="container">
                <h2>Login</h2>
                <form>
                    <div class="input-container">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div class="input-container">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div class="social-login">
                    <p>Or login with:</p>
                    <NavLink to="/googlelogin" class="google-btn">Login with Google</NavLink>
                    <NavLink to="/githublogin" class="github-btn">Login with GitHub</NavLink>
                </div>
            </div>
        </>
    )
}
export default Landing;