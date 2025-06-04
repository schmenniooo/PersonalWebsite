
import './defaultRouteContainer.css'

function DefaultRouteContainer({ title, children }) {

    // TODO: Loading ?
    // TODO: Errors ?

    return (

        <div className="container">
            <div className="card">
                <h1 className="title">{title}</h1>
                <div className="divider"></div>
                {children}
            </div>
        </div>
    )
}

export default DefaultRouteContainer;
