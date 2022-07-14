import React from "react";
import styles from "../Styles/styles.module.css";

const ModifyPost = (props) => {
    return (
        <><section className={styles.create_post}>
            <form>
                <h1>Modify Post</h1>
                <input type='text'
                    defaultValue={props.title}
                    onChange={props.savePostTitleToState}
                    text
                    placeholder="title"
                    size="39"
                ></input>
                <br />
                <br />
                <textarea
                    defaultValue={props.content}
                    placeholder="content"
                    onChange={props.savePostContentToState}
                    rows="8"
                    cols="41"
                ></textarea>
                <br />
                <br />
                <section className={styles.button_wrapper}>
                    <button className={styles.button} onClick={props.updatePost}>Update Post</button>
                </section>
            </form>
        </section>
        </>
    );
};
export default ModifyPost;