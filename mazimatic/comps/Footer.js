const Footer = () => {
    return (
        <footer>

            <div className="footer-inner">

                <div className="footer-desc">
                    <img src="assets/images/footer-logo.png" className="footer-logo" />
                        <p>Integer commodo congue justo non blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna mauris, viverra.</p>
                </div>
                <div className="footer-links">
                    <h2>Buy Tokens</h2>
                    <ul>
                        <li><a href="">link 1</a></li>
                        <li><a href="">link 2</a></li>
                        <li><a href="">link 3</a></li>
                        <li><a href="">link 4</a></li>
                        <li><a href="">link 5</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>NFTKart</h2>
                    <ul>
                        <li><a href="">link 1</a></li>
                        <li><a href="">link 2</a></li>
                        <li><a href="">link 3</a></li>
                        <li><a href="">link 4</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>Metaverse</h2>
                    <ul>
                        <li><a href="">link 1</a></li>
                        <li><a href="">link 2</a></li>
                    </ul>

                    <select>
                        <option>English</option>
                    </select>

                </div>

            </div>

        </footer>
    );
}

export default Footer;