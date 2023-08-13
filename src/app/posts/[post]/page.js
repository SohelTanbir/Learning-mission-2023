import styles from '../../page.module.css';

const Post = ({params}) => {

    const postName =  params.post;


    return (
        <div className={styles.post}>
            <h1>{postName}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi totam error et repellat iure earum iste itaque a sint sapiente.`</p>
        </div>
    );
};

export default Post;