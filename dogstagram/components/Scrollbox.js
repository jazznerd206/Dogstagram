import Post from './Post.js';

function Scrollbox(props) {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        width: 'auto',
        margin: '0 auto'
    }
    return (
        <div style={styles}>
            <Post dogs={props.dogs} />
        </div>
    )
}

export default Scrollbox;