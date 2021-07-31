import { TextField, Button, Link, Grid} from '@material-ui/core'
import styled from 'styled-components'
import { useState } from 'react'

const SignupForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
    margin: 5vh auto 0 auto;

    form {
        width: 100%;
        margin-top: 2vh;
    }

    button {
        margin: 10px 0 10px 0;
    }

    div:last-child {
        display: flex;
        justify-content: flex-end;
    }
`
const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            email,
            username,
            password,
            password2
        }
        props.signup(user);
    }
    return (
        <SignupForm onSubmit={(e) => handleSubmit(e)}>
            Sign up
            <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Confirm password"
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign up
                </Button>
            
                <div>
                    <Link href="/#/login" variant="body2">
                        {"Already have an account? Log in"}
                    </Link>
                </div>
            </form>
        </SignupForm>
    )
}


export default Signup