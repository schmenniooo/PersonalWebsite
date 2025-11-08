
import './Landing.css'

function Landing({ onClose }) {

    function goToMainPage() {
        onClose();
    }

    return (
        <div className="landingContainer">
            <div className="landing-background">
                <div className="landing-orb orb-1"></div>
                <div className="landing-orb orb-2"></div>
                <div className="landing-orb orb-3"></div>
            </div>
            <div className="glass-landing-card">
                <section className="glass-picture-container">
                    <div className="picture-wrapper">
                        <img className="glass-picture" src="/images/myself.jpeg" alt="Me"></img>
                    </div>
                </section>
                <div className="glass-landing-divider"></div>
                <h1 className="glass-landing-heading">Welcome!</h1>
                <p className="glass-landing-text">My name is Ennio Schmidt and I'm a Software Engineer..</p>
                <button className="glass-button" onClick={goToMainPage}>
                    <span className="button-text">Explore My Work</span>
                </button>
            </div>
        </div>
    )
}

export default Landing
