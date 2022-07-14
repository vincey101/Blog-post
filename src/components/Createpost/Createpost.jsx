import React from "react";
import styles from "../Styles/styles.module.css";

const CreateNewPost = props => {
    return (
        <>
            <section className={styles.create_post}>
                <form onSubmit={props.savePost}>
                    <h1>Create New Post</h1>
                    <input
                        type="text"
                        onChange={props.savePostTitleToState}
                        className={styles.post_title}
                        placeholder="Title"
                        size="39"
                        required
                        ref={props.getTitle}
                    ></input>
                    <br />
                    <br />
                    <textarea
                        onChange={props.savePostContentToState}
                        placeholder="Content"
                        rows="8"
                        cols="41"
                        required
                        ref={props.getContent}
                    ></textarea>
                    <br />
                    <br />
                    <section className={styles.button_wrapper}>
                        <button className={styles.button}>Save Post</button></section>
                </form>
            </section>
        </>
    );
};
export default CreateNewPost;