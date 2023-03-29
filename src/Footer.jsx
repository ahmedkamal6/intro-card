import "./Footer.css";
import twitterIcon from "./assets/TwitterIcon.png";
import facebookIcon from "./assets/FacebookIcon.png";
import instaIcon from "./assets/InstagramIcon.png";
import githubIcon from "./assets/GitHubIcon.png";
function Footer() {
  return (
    <section className="footer">
      <img className="footer--icon" src={twitterIcon} alt="tw" />
      <img className="footer--icon" src={facebookIcon} alt="fb" />
      <img className="footer--icon" src={instaIcon} alt="insta" />
      <a href="https://github.com/ahmedkamal6" target="_blank">
        <img className="footer--icon" src={githubIcon} alt="github" />
      </a>
    </section>
  );
}

export default Footer;
