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
                        <p>21520390 - Tran Nhut Phat</p>
                        <p>20521123 - Bui Tong Minh Chau</p>
                        <p>21520613 - Nguyen Hoang Quoc Bao</p>
                        <p>19522036 - Nguyen Dinh Hoang Phuc</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Footer;