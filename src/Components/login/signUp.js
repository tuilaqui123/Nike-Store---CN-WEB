import './login.css'

const SignUp = () => {
    return (
        <div className="login-container">
            <h1>SIGN UP</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder='Email or Phone number'
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                />
            </div>
            <button className="submit-button">
                <p>SIGN UP</p>
            </button>
        </div>
    );
}

export default SignUp;