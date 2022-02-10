const Team6 = () => {
    return (
        <section id="team" >
            <div className="team-inner">
                <div className="left">
                    <div className="team-member">
                        <img src="/assets/images/cto.png" className="cto-img" />
                        <p>CTO</p>
                    </div>

                    <div className="team-member">
                        <img src="/assets/images/cfo.png" className="cfo-img" />
                        <p>CFO</p>
                    </div>

                    <div className="team-member">
                        <img src="/assets/images/cdo.png" className="cdo-img" />
                        <p>CDO</p>
                    </div>

                </div>
                <div className="right">
                    <h1>Meet the<br /><span>Team</span></h1>
                    <p>Proin sed magna sed orci consectetur <br /> fermentum vitae a eros.</p>

                    {/* <br /><br />
                    <button className="blue-btn">Explore</button>
                    <button className="grey-btn">CTA 2</button> */}
                </div>
            </div>
            <div className="team-inner2">
                <div className="team-member">
                    <img src="/assets/images/chief-advisor.png" className="chief-advisor-img" />
                    <p>Chief Advisor</p>
                </div>

                <div className="team-member">
                    <img src="/assets/images/chief-advior2.png" className="chief-advisor-img" />
                    <p>Chief Advisor</p>
                </div>

                <div className="team-member">
                    <img src="/assets/images/chief-advior3.png" className="chief-advisor-img" />
                    <p>Chief Advisor</p>
                </div>

                <div className="team-member">
                    <img src="/assets/images/chief-advior4.png" className="chief-advisor-img" />
                    <p>Chief Advisor</p>
                </div>

                <div className="team-member">
                    <img src="/assets/images/cmo.png" className="cmo-img" />
                    <p>CMO</p>
                </div>
            </div>
        </section>
    );
}

export default Team6;