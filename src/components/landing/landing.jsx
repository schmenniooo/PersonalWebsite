
import './landing.css'

function Landing() {

    return (
        <div className="landingContainer">
            <div className="landingCard">
                <section className="pictureContainer">
                    <img className="picture" alt="Me"></img>
                </section>

                <h2 className="landigHeading">Welcome!</h2>
                <p className="landingText">My name is Ennio and I'm Software Engineer..</p>
                <span className="counter">counter</span>
                <button className="redirector">Go to Mainpage</button>
            </div>
        </div>
    )
}

export default Landing
