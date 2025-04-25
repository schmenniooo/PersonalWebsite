
function Footer() {

    const currentYear = new Date().getFullYear().toString();

    return (
        <div>
            <footer>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/schmenniooo/" target="_blank">
                            <img src="../../assets/insta_icon.jpeg" alt="instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/schmenniooo" target="_blank">
                            <img src="../../assets/github_icon.jpeg" alt='github'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ennio-schmidt-0304472b6/" target="_blank">
                            <img src="../../assets/linkedIn_icon.jpeg" alt='linkedin'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../../assets/email_icon.jpeg" alt='email'/>
                        </a>
                    </li>
                </ul>
                <h3>&copy; {currentYear} Ennio Schmidt. All rights reserved.</h3>
            </footer>
        </div>
    )
}

export default Footer