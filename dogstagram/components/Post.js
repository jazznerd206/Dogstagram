function Post(props) {
    const postContainerStyle = {
        margin: '0 auto',
        width: '400px',
        textAlign: 'left',
        overflow: 'hidden',
        fontFamily: 'Times',
        border: '2px solid black',
        padding: '10px 5px',
        marginBottom: '25px'
    }
    const imgContainerStyle = {
        padding: ' 10px 0',

    }
    const imgStyle = {
        margin: '0 auto',
        height: 'auto',
        width: '100%'
    }
    const bottomBar = {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '25px',
        width: '100%',
        background: 'black'
    }
    const iconStyle = {
        padding: '5px 5px',
        color: 'white',
        backgroundColor: "black",
        borderRadius: '25px'
    }
    return (
        <div>
                {props.dogs.map(dog => {
                    return (
                    <div key={dog.id}>
                        <div className="post-container" style={postContainerStyle}>
                            <div className="image-container" style={imgContainerStyle}>
                                <img style={imgStyle} src={dog.url}/>
                            </div>
                            <div className="post-title">
                                {dog.name}
                                {dog.breeds.map(dog => (
                                    <div key={dog.id} >
                                        <p>{dog.name}, bred for {dog.bred_for}. Typically {dog.temperament ? (dog.temperament).toString().toLowerCase() : ''}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bottom-bar" style={bottomBar}>
                                <i className="fas fa-heart fa-2x" style={iconStyle}></i>
                                <i className="far fa-comment fa-2x" style={iconStyle}></i>
                                <i className="fas fa-share fa-2x" style={iconStyle}></i>
                            </div>
                        </div>
                        
                    </div>
                    )
                })}
        </div>
    )
}

export default Post;
