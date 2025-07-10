
import './landing.css'

function Landing({ onClose }) {

    function goToMainPage() {
        onClose();
    }

    return (
        <div className="landingContainer">
            <div className="landingCard">
                <section className="pictureContainer">
                    <img className="picture" src="/images/myself.jpeg" alt="Me"></img>
                </section>
                <div className="landing-divider"></div>
                <h1 className="landingHeading">Welcome!</h1>
                <p className="landingText">My name is Ennio and I'm a Software Engineer..</p>
                <button className="redirector" onClick={goToMainPage}>Go ahead</button>
            </div>
        </div>
    )
}

export default Landing
