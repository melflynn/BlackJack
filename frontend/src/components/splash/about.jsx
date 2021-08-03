import { useHistory } from "react-router-dom";
import styled from "styled-components";

const AboutWrapper = styled.div`
    background-image: url(https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2692&q=80);
    width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0;
    }
`

const About = () => {
    const hist = useHistory();

    return (
        <AboutWrapper>
            <h2>Blackjack</h2>
            <p>Multiplayer blackjack card game</p>
            <h2>Tech</h2>
            <p>Technology used in this project includes but is not limited to: react, react-redux, material-ui, socket.io. </p>
            <p>Authentication is accomplished using JWT tokens and user credential information are stored on a MongoDB cluster</p>
            <p>socket.io is utilized in order abstract each game session into so called 'rooms' to faciliate broadcasting and receiving of current game state information</p>
            <h2>Meet the team</h2>
            <span>Anthony Chen (Frontend) <a href='https://www.linkedin.com/in/anthony-c-b8250b126/'>Linkedin</a></span>
            <span>Michael Lau (Frontend) <a href='https://www.linkedin.com/in/michaelslau/'>Linkedin</a></span>
            <span>Melissa Flynn (Backend) <a href='https://www.linkedin.com/in/melissa-flynn-372b84b7/'>Linkedin</a></span>
        </AboutWrapper>
    )
}

export default About;