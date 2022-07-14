import React, { useState, useRef } from "react";
import CreateNewPost from "../Createpost/Createpost";
import Post from "../Post/Post";
import ModifyPost from "../Modifypost/Modifypost";
import styles from "../Styles/styles.module.css";

const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

    // Initialize useRef
    const getTitle = useRef();
    const getContent = useRef();

    const savePostTitleToState = event => {
        setTitle(event.target.value);
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
    };
    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost);
    };
    const toggleModifyPostComponent = () => {
        setIsModifyPost(!isModifyPost)
    }
    const editPost = id => {
        setEditPostId(id);
        console.log(id)
        toggleModifyPostComponent();
    };
    const deletePost = id => {
        const modifiedPost = allPosts.filter(eachPost => {
            return eachPost.id !== id;
        });
        setAllPosts(modifiedPost);
    };
    const updatePost = (event) => {
        event.preventDefault();
        const updatedPost = allPosts.map(eachPost => {
            if (eachPost.id === editPostId) {
                console.log([eachPost.id, editPostId])
                return {
                    ...eachPost,
                    title: title || eachPost.title,
                    content: content || eachPost.content
                };
            }
            console.log(eachPost)
            return eachPost;
        });
        setAllPosts(updatedPost);
        toggleModifyPostComponent();
    };
    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, { title, content, id }]);
        console.log(allPosts);
        setTitle("");
        setContent("");
        getTitle.current.value = "";
        getContent.current.value = "";
        toggleCreateNewPost();
    };
    if (isCreateNewPost) {
        return (
            <>
                <CreateNewPost
                    savePostTitleToState={savePostTitleToState}
                    savePostContentToState={savePostContentToState}
                    getTitle={getTitle}
                    getContent={getContent}
                    savePost={savePost}
                    deletePost={deletePost}
                />
            </>
        );
    }
    else if (isModifyPost) {
        const post = allPosts.find(post => {
            return post.id === editPostId;
        });
        return (
            <ModifyPost
                title={post.title}
                content={post.content}
                updatePost={updatePost}
                savePostTitleToState={savePostTitleToState}
                savePostContentToState={savePostContentToState}
            />
        );
    }
    return (
        <>
            {!allPosts.length ? (
                <section className={styles.no_post}>
                    <h1>No Post Found!</h1>
                    <h3>There is nothing to see here.</h3>
                    <br />
                    <br />
                    <section className={styles.button_wrapper}>
                        <button onClick={toggleCreateNewPost} className={styles.button}>Create New</button>
                    </section>
                </section>
            ) : (
                <div><h1>All Posts</h1>
                    <section className={styles.all_post}>
                        {allPosts.map(eachPost => {
                            return (
                                <Post
                                    id={eachPost.id}
                                    key={eachPost.id}
                                    title={eachPost.title}
                                    content={eachPost.content}
                                    editPost={editPost}
                                    deletePost={deletePost}
                                />
                            );
                        })}
                        <section className={styles.button_wrapper}>
                            <button onClick={toggleCreateNewPost} className={styles.button}>Create New</button>
                        </section>
                    </section>

                </div>
            )}


        </>
    );
};
export default DisplayAllPosts;