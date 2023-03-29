import "./Info.css";
import image from "./assets/d8273712-2021-4d32-a3af-cd84ff04e5c3.jfif";
import emailIcon from "./assets/email.png";
import linkedinIcon from "./assets/linkedin.png";
function Info() {
  return (
    <section className="info">
      <div className="img">
        <img src={image} alt="images" className="info--profileImg" />
      </div>
      <p className="info--name">Ahmed Kamal</p>
      <p className="info--job">Frontend Developer</p>
      <p className="info--website">ahmedkamal.website</p>
      <div className="info--links">
        <a className="info--links--email" href="#">
          <img src={emailIcon} alt="" /> Email
        </a>
        <a
          className="info--links--linkedin"
          href="https://www.linkedin.com/in/ahmed-kamal-9176b6150/"
          target="_blank"
        >
          <img src={linkedinIcon} alt="" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
export default Info;
