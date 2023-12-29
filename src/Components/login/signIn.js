import './login.css'

const SignIn = () => {
    return (
        <div className="login-container">
            <h1>SIGN IN</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder='Email or Phone number'
                />
                <input
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button className="submit-button">
                <p>SIGN IN</p>
            </button>
        </div>
    );
}

export default SignIn;