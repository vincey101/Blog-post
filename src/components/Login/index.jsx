import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';


function LogIn() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState("");


    const handleChange = ({ currentTarget: input }) => {
        setData(
            {
                ...data,
                [input.name]: input.value
            }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth"
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
            // console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400
                && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }
    }
    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit} >
                        <h1>Login to Your Account</h1>
                        <input
                            type="email"
                            className={styles.input}
                            onChange={handleChange}
                            placeholder="Email Address"
                            name='email'
                            value={data.email}
                            required
                        />

                        <input
                            type="password"
                            className={styles.input}
                            onChange={handleChange}
                            placeholder="Password"
                            name='password'
                            value={data.password}
                            required
                        />

                        {error && <div className={styles.error_msg}>{error}</div>}

                        <button className={styles.green_btn} type="submit">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here?</h1>
                    <Link to="/signup">
                        <button className={styles.white_btn} type="button">Sign up</button>
                    </Link>

                </div>
            </div>
        </div>

    )
}
export default LogIn;