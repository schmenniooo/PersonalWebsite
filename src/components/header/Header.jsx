
import { Link } from 'react-router-dom';

function Header(){

    const navigationItems = [
        ["Me", "/"],
        ["My Career", "/career"],
        ["My Skills", "/skills"],
        ["My Projects", "/projects"]
    ]

    return (
        <div className="headerContainer">
            <div className="glass-title-container">
                <h1 className="glass-title">
                    <Link className="headingLink" to="/">Ennio Schmidt</Link>
                </h1>
            </div>
            <nav className="glass-nav-container">
                <ul className="navigationItemContainer">
                    {navigationItems.map(([text, link]) => (
                        <li className="navigationItem" key={text}>
                            <Link className="linkItem" to={link}>{text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header