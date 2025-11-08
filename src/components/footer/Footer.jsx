
import {FaInstagram, FaGithub, FaLinkedin, FaLink} from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="footerContainer">
            <footer className="glass-footer">
                <div className="footer-content">
                    <ul className="social-links">
                        <li>
                            <a href="https://www.instagram.com/schmenniooo/" target="_blank" aria-label="Instagram" className="social-link">
                                <div className="icon-wrapper">
                                    <FaInstagram className="social-icon" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/schmenniooo" target="_blank" aria-label="GitHub" className="social-link">
                                <div className="icon-wrapper">
                                    <FaGithub className="social-icon" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ennio-schmidt-0304472b6/" target="_blank" aria-label="LinkedIn" className="social-link">
                                <div className="icon-wrapper">
                                    <FaLinkedin className="social-icon" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://de.fiverr.com/s/Q7Qpqz3" target="_blank" aria-label="Fiverr" className="social-link">
                                <div className="icon-wrapper">
                                    <FaLink className="social-icon" />
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-divider"></div>
                    <p className="footer-text">&copy; {currentYear} Ennio Schmidt. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;