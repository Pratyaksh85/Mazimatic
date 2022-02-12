const Footer = () => {
    return (
        <footer>

            <div className="footer-inner">

                <div className="footer-desc">
                    <img src="assets/images/footer-logo.png" className="footer-logo" />
                        <p>PartyVerse - AdventureVerse and InfluencerVerse, so stay tuned and get ready to have some unique fun.</p>
                </div>
                <div className="footer-links">
                    <h2>Buy Tokens</h2>
                    <ul>
                        <li><a href="">Decentralized Exchange</a></li>
                        <li><a href="">Liquidity Pool</a></li>
                        <li><a href="">Connect Wallet</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>NFTKart</h2>
                    <ul>
                        <li><a href="">Explore Marketplace</a></li>
                        <li><a href="">Create NFT</a></li>
                        <li><a href="">Top Selling</a></li>
                        <li><a href="">Popular Collections</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>Metaverse</h2>
                    <ul>
                        <li><a href="">Coming Soon...</a></li>
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