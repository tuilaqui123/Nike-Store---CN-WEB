import './footer.css'

const Footer = () => {
    return (
        <div className="Footer-container">
            <ul>
                <li>
                    <h3>About Website</h3>
                    <div className="about-content">
                        <p>News</p>
                        <p>Deliery</p>
                        <p>Payment Options</p>
                        <p>Contact us</p>
                    </div>
                </li>
                <li>
                    <h3>About Us</h3>
                    <div className="about-content">
                        <p>21520419 - Pham Ngoc Qui</p>
                        <p>21520419 - Pham Ngoc Qui</p>
                        <p>21520419 - Pham Ngoc Qui</p>
                        <p>21520419 - Pham Ngoc Qui</p>
                        <p>21520419 - Pham Ngoc Qui</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Footer;