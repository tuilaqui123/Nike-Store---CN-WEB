import './login.css'

const SignUp = () => {
    return (
        <div className="login-container">
            <h1>SIGN UP</h1>
            <div className="input-container">
                <div className="input-box">
                    <p>Phone number:</p>
                    <input
                        type="text"
                        placeholder='Phone number'
                    />
                </div>
                <div className="input-box">
                    <p>Password:</p>
                    <input
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="input-box">
                    <p>Confirm password:</p>
                    <input
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>
            </div>
            <button className="submit-button">
                <p>SIGN UP</p>
            </button>
        </div>
    );
}

export default SignUp;