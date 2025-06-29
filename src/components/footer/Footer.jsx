
import {FaInstagram, FaGithub, FaLinkedin, FaLink} from 'react-icons/fa';

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
                        <a href="https://de.fiverr.com/s/Q7Qpqz3" target="_blank" aria-label="Fiverr">
                            <FaLink className="social-icon" />
                        </a>
                    </li>
                </ul>
                <h3>&copy; {currentYear} Ennio Schmidt. All rights reserved.</h3>
            </footer>
        </div>
    );
}

export default Footer;