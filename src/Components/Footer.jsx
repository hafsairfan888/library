import Twitter from "../assets/icons/tweet.png";
import Linkedin from "../assets/icons/linkedin.png";
import Instagram from "../assets/icons/instagram.png";
import Github from "../assets/icons/github.png";
import Facebook from "../assets/icons/pngwing.com.png";
import { Link as Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="footer">
      <div className="social--icons">
        <a
          href="https://www.instagram.com/habibgirlsschool_official/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="social-link instagram-link"
          />
        </a>
        <div className="footer-divider"></div>
        <a 
          href="https://habibschools.edu.pk/hgs/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Github} alt="Github" className="social-link github-link" />
        </a>
        <div className="footer-divider"></div>
        <a 
          href="https://www.linkedin.com/company/habibgirlsschoolofficial"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Linkedin} alt="Linkedin" className="social-link linkedin-link" />
        </a>
        <div className="footer-divider"></div>
        <a 
          href="https://twitter.com/HGSKarachi"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Twitter} alt="Twitter" className="social-link twitter-link" />
        </a>
        <div className="footer-divider"></div>
        <a 
          href="https://www.facebook.com/HabibGirlsSchoolOfficial"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={Facebook} alt="Facebook" className="social-link twitter-link" />
        </a>
      </div>
      <div className="footer-para">
        {" "}
        <Link to="https://habibschools.edu.pk/hgs/" className="footer--name--link">Habib Girls' School</Link>
      </div>
    </footer>
  );
}
