import React, { useState } from 'react';

function Post(props) {

    const [ like, setLike ] = useState(false);

    const postContainerStyle = {
        margin: '0 auto',
        width: '400px',
        textAlign: 'left',
        overflow: 'hidden',
        fontFamily: 'Times',
        border: '.5px solid black',
        paddingTop: '10px',
        marginBottom: '25px',
        backgroundColor: '#FFFFFF'
    }
    const titleContainer = {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Grand Hotel',
        fontSize: 'x-large',
        paddingLeft: '5px'
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
        paddingLeft: '5px',
        width: '100%',
        // background: 'black'
    }
    const iconStyle = {
        padding: '5px 5px',
        color: 'black',
    }
    const fillStyle = {
        padding: '5px 5px',
        color: '#B90E0A',
    }
    const doggieIcon = {
        width: 'auto',
        height: '25px',
        borderRadius: '100%',
        margin: '5px 5px'
    }
    const pStyle = {
        // textTransform: 'lowercase',
        fontFamily: 'Roboto',
        padding: '0px 5px'
    }
    const toggleLike = () => {
        if (like === true) {
            setLike(false);
        } else if (like === false) {
            setLike(true)
        }
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
                                        <p style={pStyle}>{dog.bred_for}. <strong>Traits:</strong> {dog.temperament ? (dog.temperament).toString().toLowerCase() : ''}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bottom-bar" style={bottomBar}>
                                {like === false ? (
                                    <div>
                                        <i aria-hidden className="far fa-heart fa-2x" style={iconStyle} onClick={toggleLike}></i>
                                    </div>
                                ) : (
                                    <div>
                                        <i aria-hidden className="fas fa-heart fa-2x" style={fillStyle} onClick={toggleLike}></i>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                    </div>
                    )
                })}
        </div>
    )
}

export default Post;
