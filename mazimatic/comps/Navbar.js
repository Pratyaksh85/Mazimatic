const Navbar = () => {
    return (
        <div>
            <nav id="navbar-primary" className="navbar" role="navigation">
                <input type="checkbox" id="checkbox_toggle" />
                <div className="test">
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    <img src="/assets/images/footer-logo.png" className="na-logo" />
                </div>

                <div className="collapse navbar-collapse" id="navbar-primary-collapse">


                    <div className="search-box child">
                        <div className="search-box-inner">
                            <div className="search-section">
                                <span><img src="/assets/images/search-icon.png" />&nbsp; <input type="text" placeholder="Search anything" /> </span>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <ul className="nav navbar-nav">
                            <li id="buy-token" className="active"><a href="#">Buy Tokens</a></li>
                            <li id="nftkart"><a href="#">NFTKart</a></li>
                            <li id="nav-logo">
                                <a href="#">
                                    <img src="/assets/images/footer-logo.png" className="navbar-logo" />
                                </a>
                            </li>
                            <li id="metaverse"><a href="#">Metaverse</a></li>
                            <li id="english"><a href="#">English</a></li>

                        </ul>
                    </div>
                    <div className="connect-wallet child">
                        <div className="connect-wallet-inner">
                            <div className="wallet-section">
                                <span> <img src="/assets/images/wallet.png" alt="wallet" /> Connect Wallet</span>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>

            <hr />

            {/* <nav class="navbar">
                <div class="logo">MUO</div>
                <ul class="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <div class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li class="services">
                            <a href="/">Services</a>
                            <ul class="dropdown">
                                <li><a href="/">Dropdown 1 </a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 3</a></li>
                                <li><a href="/">Dropdown 4</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Contact</a></li>
                    </div>
                </ul>
            </nav> */}
        </div>
    );
}

export default Navbar;