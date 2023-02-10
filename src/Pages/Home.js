import React from "react";
import styles from "./Home.module.css";

import image1 from "../Images/bkg2.png";
import pets from "../Images/pets.png";
import exotic from "../Images/exotic.png";
import petcare from "../Images/petcare.png";
import adoption from "../Images/adoption.png";
import petprofile from "../Images/profile-pic.png";
import thank from "../Images/thank.png";
import emergency from "../Images/emergency.png";
import advise from "../Images/advise.png";
import support from "../Images/support.png";
import vet from "../Images/vet.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import facebook from "../Images/facebook.png";
import email from "../Images/email.png";
import whats from "../Images/whats.png";







const Home = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerInfoText}>
          <h1>Bem vindo ao Need Pets</h1>
          <p>Melhor pet shop do seu bairro</p>

          <button className={styles.btn}>Nossos serviços</button>
          <button className={styles.btn}>Saiba mais</button>
        </div>

        <div className={styles.headerInfoImage}>
          <img className={styles.imgBanner} src={image1} alt="" />
        </div>
      </div>

      <h2 className={styles.Titles}>
        Oferecemos os melhores serviços para seu{" "}
        <span className={styles.TitlesColor}>pet.</span>
      </h2>
      <div className={styles.start}>
        <div className={styles.startCard}>
          <div className={styles.cardSection1}>
            <img className={styles.imgPet} src={pets} alt="" />

            <h1>Filhotes</h1>

            <p>Ajudamos no crescimento de seu Pet</p>
          </div>

          <div className={styles.cardSection1}>
            <img className={styles.imgPet} src={exotic} alt="" />

            <h1>Pets Exóticos</h1>

            <p>Cuidamos de seu bixinho exótico</p>
          </div>

          <div className={styles.cardSection1}>
            <img className={styles.imgPet} src={petcare} alt="" />
            <h1>Pet Care</h1>
            <p>Todos os cuidados necessários</p>
          </div>

          <div className={styles.cardSection1}>
            <img className={styles.imgPet} src={adoption} alt="" />

            <h1>Adoções</h1>
            <p>Adote seu mais novo amor diario</p>
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.imageSection2}>
          <img src={petprofile} alt="" />
        </div>
        <div className={styles.TextSection2}>
          <h1>Todo mundo precisa de um amigo</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className={styles.btn_section2}>Saiba mais</button>
        </div>
      </div>

      <h1 className={styles.textBanner}>
        Porque escolher <span className={styles.TitlesColor}>Need Pets?</span>
      </h1>
      <div className={styles.bannerContainer}>
        <div className={styles.Banner}>
          <h3>50</h3>
          <h6>Clientes</h6>
        </div>

        <div className={styles.Banner}>
          <h3>150</h3>
          <h6>Adoções</h6>
        </div>

        <div className={styles.Banner}>
          <h3>30</h3>
          <h6>Profissionais</h6>
        </div>

        <div className={styles.Banner}>
          <h3>24H</h3>
          <h6>Suporte</h6>
        </div>
      </div>

      <div className={styles.section3}>
        <div className={styles.section3Img}>
          <img className={styles.image} src={thank} alt="" />
        </div>

        <div className={styles.section3Container}>
          <div className={styles.section3Text}>
            <div className={styles.section3Cards}>
              <img className={styles.cardIcon} src={advise} alt="" />
              <h2>Conselhos de cuidados</h2>
            </div>

            <div className={styles.section3Cards}>
              <img className={styles.cardIcon} src={support} alt="" />
              <h2>Suporte ao cliente</h2>
            </div>
          </div>
        </div>

        <div className={styles.section3Container}>
          <div className={styles.section3Text}>
            <div className={styles.section3Cards}>
              <img className={styles.cardIcon} src={emergency} alt="" />
              <h2>Serviços de Emergência</h2>
            </div>

            <div className={styles.section3Cards}>
              <img className={styles.cardIcon} src={vet} alt="" />
              <h2>Ajuda veterinária</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ContatoContainer}>
        <div className={styles.ContatoText}>
          <h1 className={styles.ContatoTitle}>Contatos</h1>
          <p className={styles.ContatoSubTitle}>
            Entre em contato conosco através de nossos canais de comunicação
          </p>
          <div className={styles.ContatoIcons}>
            <div className={styles.ContatoItens}>
              <img className={styles.icon} src={whats} alt="" />
              <br />
              <p>(12) 99999-9999</p>
            </div>

            <div className={styles.ContatoItens}>
              <img className={styles.icon} src={instagram} alt="" />
              <br />
              <p>@NeedPets</p>
            </div>
          </div>


          

           
        </div>

        <div className={styles.form}>
          <label>Email</label>
          <input type="text" />

          <label>Telefone</label>
          <input type="text" />

          <label>Mensagem</label>
          <br />
          <textarea />

          <button className={styles.btn_Contato}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
