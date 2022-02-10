const Navbar = () => {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    Mazimatic
                </div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <a href="" target="_blank">link 1</a>
                <a href="" target="_blank">link 2</a>
                <a href="" target="_blank">link 3</a>
                <a href="" target="_blank">link 4</a>
                <a href="" target="_blank">link 5</a>
            </div>
        </div>
    );
}

export default Navbar;