
import './landing.css'

function Landing() {

    return (
        <div className="landingContainer">
            <div className="landingCard">
                <section className="pictureContainer">
                    <img className="picture" src="src/assets/logo.png" alt="Me"></img>
                </section>
                <div className="landing-divider"></div>
                <h1 className="landigHeading">Welcome!</h1>
                <p className="landingText">My name is Ennio and I'm a Software Engineer..</p>
                <button className="redirector">Go to Mainpage</button>
            </div>
        </div>
    )
}

export default Landing
