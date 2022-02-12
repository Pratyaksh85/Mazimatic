const Section1 = () => {
    return (
        <section id="main-banner">


            <div className="banner-inner">
                <div className="left">
                    <h1>Welcome to<br /><span>MaziMatic</span></h1>
                    <p>A virtual world where users can own, build, play and monetize the experiences.</p>

                    <br /><br />
                    <button className="blue-btn">Buy Tokens</button>
                    <button className="grey-btn">Explore</button>
                    <br /><br /><br /><br />

                    <div style={{ display: "inline" }}>
                        <div className="img-div">
                            <img src="/assets/images/img-1.png" className="small-img s-1" />
                            <img src="/assets/images/img-1.png" className="small-img s-2" />
                            <img src="/assets/images/img-1.png" className="small-img s-3" />
                        </div>
                        <div className="text-div">
                            <p>23k+<br /><span>Users</span></p>
                        </div>
                    </div>


                </div>
                <div className="right">
                    <img src="/assets/images/3d-futuristic-woman-with-metaverse-vr-glasses 1.png" className="main-img" />
                </div>
            </div>



        </section>
    );
}

export default Section1;