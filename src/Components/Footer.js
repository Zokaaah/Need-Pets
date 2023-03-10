import React from "react";
import styles from "../Components/footer.module.css"
import gitlogo from "../Images/github.png";
import linklogo from "../Images/linkedin.png";
import EmailIcon from "../Images/email.png"
import instagramIcon from "../Images/instagram.png"

const Footer = () => {
  return (
    <div className={styles.rodape}>
      <h3>
        Desenvolvido por{" "}
        <span className={styles.colortext}>Gabriel de Oliveira.</span>
      </h3>
      <div className="icons">
        <a href="https://github.com/Zokaaah/">
          <img className={styles.icons} src={gitlogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-oliveira-silva-471b23194/">
          <img className={styles.icons} src={linklogo} alt="Linkedin" />
        </a>
        <a href="https://www.instagram.com/gabriel_zokah/">
          <img className={styles.icons} src={instagramIcon} alt="Instagram" />
        </a>
        <a href="gabriel.oliveira_012@hotmail.com">
          <img className={styles.icons} src={EmailIcon} alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default Footer;