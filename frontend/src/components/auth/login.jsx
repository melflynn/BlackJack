import { TextField, Button, Link } from '@material-ui/core'
import styled from 'styled-components'
import React, { useState } from 'react'

const LoginForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
    margin: 5vh auto 0 auto;

    form {
        width: 100%
    }

    button {
        margin: 10px 0 10px 0;
    }

    div {
        display: flex;
        justify-content: flex-end;
    }
`
const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            username,
            password
        }
        props.login(user);
    }
    return (
        <LoginForm onSubmit={(e) => handleSubmit(e)}>
            Log in
            <form>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Log in
            </Button>
            
            <div>
                <Link href="/#/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </div>
            </form>
        </LoginForm>
    )
}


export default Login