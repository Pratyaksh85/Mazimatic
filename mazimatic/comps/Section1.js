const Section1 = () => {
    return (
        <section id="main-banner">


            <div className="banner-inner">
                <div className="left">
                    <h1>Welcome to<br /><span>MaziMatic</span></h1>
                    <p>Ras vitae varius turpis, sed congue orci. In vulputate ut massa fringilla vestibulum. Vivamus sit amet venenatis mi.</p>

                    <br /><br />
                    <button className="blue-btn">CTA 1</button>
                    <button className="grey-btn">CTA 2</button>
                    <br /><br /><br /><br />

                    <div style={{ display: "inline" }}>
                        <div className="img-div">
                            <img src="/assets/images/img-1.png" className="small-img s-1" />
                            <img src="/assets/images/img-1.png" className="small-img s-2" />
                            <img src="/assets/images/img-1.png" className="small-img s-3" />
                        </div>
                        <div className="text-div">
                            <p>23k+<br /><span>Lorem Ipsum</span></p>
                        </div>
                    </div>


                </div>
                <div className="right">
                    <img src="assets/images/main-banner.png" className="main-img" />
                </div>
            </div>



        </section>
    );
}

export default Section1;