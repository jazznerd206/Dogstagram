function Scrollbox(props) {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '10px solid black',
        borderRight: '10px solid black',
        borderTop: '10px solid black',
        height: 'auto',
        width: '850px',
        margin: '0 auto'
    }
    const imgStyle = {
        height: '400px',
        width: 'auto'
    }
    return (
        <div style={styles}>
            <ul>
                {props.dogs.map(dog => {
                    return (
                    <li key={dog.id}>
                        <img style={imgStyle} src={dog.url}/>
                    </li>
                    )
                })}
            </ul>
            {console.log(props)}
        </div>
    )
}

export default Scrollbox;