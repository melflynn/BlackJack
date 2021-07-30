import "../../styles/splash_page.css";

const Splash = () => {
    return (
        <div className="splash-page-container">
            <div className="intro">Let's play BlackJack!</div>
            <div className="get-started">
                <button className="get-started-button">get started</button>
            </div>
            <div className="rules">
                <h3 className="rules-header">Rules of BlackJack</h3>
                <p className="rules-bullet">1. Something something something something</p>
                <p className="rules-bullet">2. Something something something something</p>
                <p className="rules-bullet">4. Something something something something</p>
                <p className="rules-bullet">5. Something something something something</p>
                <p className="rules-bullet">6. Something something something something</p>
                <p className="rules-bullet">7. Something something something something</p>
                <p className="rules-bullet">8. Something something something something</p>
            </div>
        </div>
    )
}

export default Splash;