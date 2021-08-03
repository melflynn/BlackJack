import { useHistory } from "react-router-dom";
import "../../styles/splash_page.css";

const Splash = () => {
    const hist = useHistory();

    return (
        <div className="splash-page-container">
            <div className="intro">Let's play BlackJack!</div>
            <div className="get-started">
                <button className="get-started-button" onClick={() => hist.push('/signup')}>get started</button>
            </div>
        </div>
    )
}

export default Splash;