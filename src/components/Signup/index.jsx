import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';


function SignUp() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

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
            const url = "http://localhost:8080/api/users"
            const { data: res } = await axios.post(url, data);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400
                && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }
    }
    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome back</h1>
                    <Link to="/login">
                        <button className={styles.white_btn} type="button">Log In</button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit} >
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            className={styles.input}
                            onChange={handleChange}
                            placeholder="First Name"
                            name='firstName'
                            value={data.firstName}
                            required
                        />

                        <input
                            type="text"
                            className={styles.input}
                            onChange={handleChange}
                            placeholder="Last Name"
                            name='lastName'
                            value={data.lastName}
                            required
                        />

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
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default SignUp;