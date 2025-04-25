
function Header(){

    return (
        <div className="headerContainer">
            <h1>Ennio Schmidt</h1>
            <nav className="navContainer">
                <ul className="navigationItemContainer">
                    <li className="navigationItem">
                        <a href="/public" className="linkItem">Me</a>
                    </li>
                    <li className="navigationItem">
                        <a href="/public" className="linkItem">My Projects</a>
                    </li>
                    <li className="navigationItem">
                        <a href="/public" className="linkItem">My Career</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header