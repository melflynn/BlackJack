import { TextField, Button, Link, Grid} from '@material-ui/core'
import styled from 'styled-components'
import { useState } from 'react'
import { signup } from '../../util/session_util';

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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(username, password, firstName, lastName)
        let user = {
            username,
            password
        }
        props.signup(user);
    }
    return (
        <SignupForm onSubmit={(e) => handleSubmit(e)}>
            Sign up
            <form>
                <Grid container spacing={2}> 
                    <Grid item xs={12} sm={6}>
                        <TextField label='First name' required variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label='Last name' required variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Grid>
                </Grid>
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