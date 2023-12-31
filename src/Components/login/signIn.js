import './login.css'

const SignIn = () => {
    return (
        <div className="login-container">
            <h1>SIGN IN</h1>
            <div className="input-container">
                <div className="input-box">
                    <p>Phone number:</p>
                    <input
                        type="text"
                        placeholder='Email or Phone number'
                    />
                </div>
                <div className="input-box">
                    <p>Password:</p>
                    <input
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <button className="submit-button">
                <p>SIGN IN</p>
            </button>
        </div>
    );
}

export default SignIn;