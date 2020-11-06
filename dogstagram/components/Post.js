function Post(props) {
    const postContainerStyle = {
        margin: '0 auto',
        width: '400px',
        textAlign: 'left',
        overflow: 'hidden',
        fontFamily: 'Times',
        border: '1px solid black',
        paddingTop: '10px',
        marginBottom: '25px'
    }
    const titleContainer = {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Grand Hotel',
        fontSize: 'x-large',
        paddingLeft: '15px'
    }
    const imgContainerStyle = {
        padding: '0 0 10px 0',
    }
    const postStyle = {
        padding: '0 5px 5px 5px',
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
        backgroundColor: 'black',
        borderRadius: '25px'
    }
    const doggieIcon = {
        width: 'auto',
        height: '25px',
        borderRadius: '100%',
        margin: '5px 5px'
    }
    return (
        <div>
                {props.dogs.map(dog => {
                    return (
                    <div key={dog.id}>
                        <div className="post-container" style={postContainerStyle}>
                            <div className="title-container" style={titleContainer}>
                                <img style={doggieIcon} src={dog.url}/>
                                {dog.breeds.map(dog => (
                                    <div key={dog.id} >
                                        <p>{dog.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="image-container" style={imgContainerStyle}>
                                <img style={imgStyle} src={dog.url}/>
                            </div>
                            <div className="post-body" style={postStyle}>
                                {dog.breeds.map(dog => (
                                    <div key={dog.id} >
                                        <p>{dog.name}, bred for {dog.bred_for}. Typically {dog.temperament ? (dog.temperament).toString().toLowerCase() : ''}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bottom-bar" style={bottomBar}>
                                <i aria-hidden className="fas fa-heart fa-2x" style={iconStyle}></i>
                            </div>
                        </div>
                        
                    </div>
                    )
                })}
        </div>
    )
}

export default Post;
