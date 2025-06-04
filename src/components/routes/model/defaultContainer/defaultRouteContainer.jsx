
import './defaultRouteContainer.css'

function DefaultRouteContainer(title) {

    // TODO: Loading ?
    // TODO: Errors ?

    return (

        <div className="container">
            <div className="card">
                <h1 className="title">{title}</h1>
                <div className="divider"></div>
            </div>
        </div>
    )
}

export default DefaultRouteContainer;
