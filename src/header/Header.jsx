
function Header(){

    const navigationItems = [
        ["Me", "/public"],
        ["My projects", "/public"],
        ["My career", "/public"],
    ]

    return (
        <div className="headerContainer">
            <h1>Ennio Schmidt</h1>
            <nav className="navContainer">
                <ul className="navigationItemContainer">
                    {navigationItems.map(([text, link]) => (
                        <li className="navigationItem" key={text}><a className="linkItem" href={link}>{text}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header