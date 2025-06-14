
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="footerContainer">
            <footer>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/schmenniooo/" target="_blank" aria-label="Instagram">
                            <FaInstagram className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/schmenniooo" target="_blank" aria-label="GitHub">
                            <FaGithub className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ennio-schmidt-0304472b6/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin className="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ennio.nick@gmail.com" aria-label="Email">
                            <FaEnvelope className="social-icon" />
                        </a>
                    </li>
                </ul>
                <h3>&copy; {currentYear} Ennio Schmidt. All rights reserved.</h3>
            </footer>
        </div>
    );
}

export default Footer;