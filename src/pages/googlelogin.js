
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
const GoogleAuthLogin = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const responseMessage = (response) => {
        if (response.clientId != "") {
            console.log(response);
            setIsSuccess(true);
        }
    };
    const errorMessage = (error) => {
        console.log(error);
        setIsError(true);
    };
    return (
        <div class="container">
            <h2>React Google Login</h2>
            <center>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </center>
            {isSuccess && <h2> You are logged in successfully!!</h2>}
            {isError && <h2> Oops something went wrong!!</h2>}
        </div>
    )
}
export default GoogleAuthLogin;