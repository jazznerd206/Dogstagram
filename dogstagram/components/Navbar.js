function Navbar() {

    const navStyle = {
        fontSize: 'xx-large'
    }

    return (
        <div className="pb-sm-5">
            <nav className="navbar navbar-expand-med navbar-light bg-light" style={navStyle}>
                <a className="navbar-brand" href="#" style={navStyle}>Dogstagram</a>
                <div>Home</div>
                </nav>
        </div>
    )
}

export default Navbar;
