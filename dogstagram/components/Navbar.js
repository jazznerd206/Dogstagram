function Navbar(props) {

    const navStyle = {
        fontSize: 'x-large',
        paddingLeft: '250px',
        paddingRight: '250px'
    }
    const linkStyle = {
        paddingRight: '25px'
    }

    return (
        <div className="pb-sm-5">
            <nav className="navbar navbar-expand-med navbar-light bg-light" style={navStyle}>
                <a className="navbar-brand" href="/"><h1>Dogstagram</h1></a>
                <div className="navbar navbar-right">
                    <a className="navbar-brand" href="/">Random Dogs</a>
                    <a className="navbar-brand" href="#">My Dogs</a>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;
