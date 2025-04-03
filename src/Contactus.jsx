import React from "react";
import "./Contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp,faInstagram,faFacebook,faGithub,faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contactus = () => {
  return (
    <div className="contact-us" id="contactus">
    <ul>
      <li>
        <a href="https://wa.me/+919347742603" target="_blank" rel="noopener noreferrer"aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} className="large-icon" /></a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/satish_tarak_fan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="large-icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/sathishyadav.desiboinasathish"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} className="large-icon" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/DSATHISH327"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="large-icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/satish-desaboina-71356824a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="large-icon" />
        </a>
      </li>
      <li>
        <a href="mailto:sathishdesaboina42@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} className="large-icon" />
        </a>
      </li>
      <li>
        <a href="tel:+919347742603" aria-label="Phone">
          <FontAwesomeIcon icon={faPhone} className="large-icon" />
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Contactus;
