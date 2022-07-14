import React from 'react'
import DisplayAllPosts from "../Displaypost/Displaypost"
import styles from "./styles.module.css"


const Main = () => {

    const handleLogOut = () => {
        localStorage.removeItem('token')
        window.location.reload();
    }
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Profile</h1>
                <button className={styles.white_btn} onClick={handleLogOut}>
                    LogOut
                </button>
            </nav>
            <DisplayAllPosts />

        </div>
    )
}

export default Main;