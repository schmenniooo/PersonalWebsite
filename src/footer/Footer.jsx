
import instagramIcon from '../assets/insta_icon.jpeg';
import githubIcon from '../assets/github_icon.jpeg';
import linkedInIcon from '../assets/linkedIn_icon.jpeg';
import emailIcon from '../assets/email_icon.jpeg';

function Footer() {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="footerContainer">
            <footer>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/schmenniooo/" target="_blank">
                            <img src={instagramIcon} alt="instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/schmenniooo" target="_blank">
                            <img src={githubIcon} alt='github'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ennio-schmidt-0304472b6/" target="_blank">
                            <img src={linkedInIcon} alt='linkedin'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={emailIcon} alt='email'/>
                        </a>
                    </li>
                </ul>
                <h3>&copy; {currentYear} Ennio Schmidt. All rights reserved.</h3>
            </footer>
        </div>
    );
}

export default Footer;
