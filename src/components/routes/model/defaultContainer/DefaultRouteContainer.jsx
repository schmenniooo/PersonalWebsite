
import './DefaultRouteContainer.css'

function DefaultRouteContainer({ title, children }) {

    return (
        <div className="container">
            <main className="content">
                <div className="glass-header">
                    <h1 className="title">{title}</h1>
                </div>
                <div className="content-wrapper">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DefaultRouteContainer;
