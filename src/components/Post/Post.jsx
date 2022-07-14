import React from "react";
import styles from "../Styles/styles.module.css";

const Post = ({ title, content, editPost, id, deletePost }) => {
    return (
        <>
            <section className={styles.post_container}>
                <h2>{title}</h2>
                <p className={styles.post_content}> {content}</p>
                <button className={styles.button} onClick={() => editPost(id)}>Edit</button>
                <button className={styles.button} onClick={() => deletePost(id)}>Delete</button>
            </section>
        </>
    );
};
export default Post;