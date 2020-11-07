function Navbar(props) {

    const navStyle = {
        fontSize: 'x-large',
        paddingLeft: '250px',
        paddingRight: '250px',
        display: 'flex',
        flexDirection: 'row'
    }
    const linkStyle = {
        paddingRight: '25px'
    }
    const leftSpacing = {
        paddingLeft: '25px'
    }

    return (
        <div className="pb-sm-5">
            <nav className="navbar navbar-expand-med navbar-light bg-light" style={navStyle}>
                <div className="navbar navbar-left">
                    <i aria-hidden className="fab fa-instagram fa-2x"></i>
                    <a className="navbar-brand" href="/"><h1 style={leftSpacing}>Dogstagram</h1></a>
                </div>
                <div className="navbar navbar-right">
                    <a className="navbar-brand" href="#" onClick={props.onClick}>Random Dogs</a>
                    <a className="navbar-brand" href="#">My Dogs</a>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;
