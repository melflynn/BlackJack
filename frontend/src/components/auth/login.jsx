import { TextField } from '@material-ui/core'
import styled from 'styled-components'

const LoginForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
    margin: 5vh auto 0 auto;

    form {
        width: 100%
    }
`
const Login = () => {
    return (
        <LoginForm>
            Sign in
            <form>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
            />
            </form>
        </LoginForm>
    )
}


export default Login