import React from 'react';

function LoginModal({loginHandler}) {
    return (
        <div style={styles.wrapper}>
            <h2>Login</h2>
            <form style={styles.form}>

                <label htmlFor='email'>Email</label>
                <input type='text' id='email'/>

                <label>Password</label>
                <input type='password' id='password' />

                <button onClick={loginHandler}>Login</button>
            </form>
        </div>
    );
}

const styles = {
    wrapper: {
        border: '1px solid black',
        margin: '30px',
        width: '500px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '30px',
    }
}

export default LoginModal;