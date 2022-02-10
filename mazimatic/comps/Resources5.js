const Resources5 = () => {
    return (
        <section id="resources">

            <div className="resources-inner">
                <div className="left">

                    <h1>Lipsum our <br /><span>Resources</span></h1>

                    <br /><br /><br />
                    <div className="resource-card">
                        <div className="resource-card-inner">
                            <img src="assets/images/res-1.png" className="res-small-icon" />
                            <img src="assets/images/res-ico-1.png" className="res-icon" />
                            <h2>The<br /><span>Whitepaper </span></h2>
                            <p>Proin sed magna sed orci consectetur fermentum vitae a eros. Donec pellentesque ornare quam, placerat lobortis leo aliquam non. Morbi efficitur sapien sit amet lacus convallis vulputate.</p>
                            <br /><br /><br />
                            <button className="download-btn">Download Resource</button>
                            <button className="learn-btn">Learn More</button>

                        </div>
                    </div>

                </div>
                <div className="right">


                    <div className="resource-card mobile-card">
                        <div className="resource-card-inner resource-card-slanted">
                            <img src="assets/images/res-2.png" className="res-small-icon" />
                            <img src="assets/images/res-ico-2.png" className="res-icon" />
                            <h2>checkout our <br /><span>Roadmap</span></h2>
                            <p>Proin sed magna sed orci consectetur fermentum vitae a eros. Donec pellentesque ornare quam, placerat lobortis leo aliquam non. Morbi efficitur sapien sit amet lacus convallis vulputate.</p>
                            <br />
                            <img src="assets/images/road.png" className="road-img" />


                        </div>
                        <br /><br /><br /><br />
                        <button className="learn-btn-2">Learn More</button>

                    </div>



                </div>
            </div>

        </section>
    );
}

export default Resources5;