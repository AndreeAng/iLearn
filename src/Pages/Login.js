import React from 'react'
import { useRef, useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    
  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <Link to="/home">Home</Link>
                </p>
            </section>
        ) : (

    <section>
        <p ref={errRef} className={errMsg ? "errmsg" :
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input 
                type='text' 
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
            
            <label htmlFor='password'>Password:</label>
            <input 
                type='password' 
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <button>Log In</button>
        </form>
        <p>
            Need an Account?<br />
            <span className='line'>
                {/*put router link here*/}
                <a href='#'>Sign Up</a>
            </span>
        </p>
    </section>
        )}
        </>
  )
}

export default Login