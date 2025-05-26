
import { Link } from 'react-router-dom';

function Header(){

    const navigationItems = [
        ["Me", "/"],
        ["My career", "/career"],
        ["My Skills", "/skills"],
        ["My projects", "/projects"]
    ]

    return (
        <div className="headerContainer">
            <h1><Link className="headingLink" to="/">Ennio Schmidt</Link></h1>
            <nav className="navContainer">
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