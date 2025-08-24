import styles from "./Footer.module.css";
import FasebookIcon from "../../assets/icons/Fasebook.svg";
import InstagramIcon from "../../assets/icons/Instagram.svg";
import TwitterIcon from "../../assets/icons/Twitter.svg";

function Footer() {
  return (
    <Footer className={styles.Footer}>
      <div className={styles.containerFooter}>
        <div className={styles.data}>
          <div className={styles.contacts}>
            <h3>Контакты</h3>
            <a href="" className={styles.telefon}>
              8 800 000 00 00
            </a>
            <a href="">emailexample@email.components</a>
          </div>
          <div className={styles.fasebook}>
            <a href="" className={styles.link}>
              <img src={FasebookIcon} alt="Fasebook" className={styles.icons} />
            </a>
            <a href="" className={styles.link}>
              <img src={TwitterIcon} alt="Twitter" className={styles.icons} />
            </a>
            <a href="" className={styles.link}>
              <img
                src={InstagramIcon}
                alt="Instagram"
                className={styles.icons}
              />
            </a>
          </div>
        </div>
        <div className={styles.input}>
          <p>2024 Сникер-магазиню Все права защищены</p>
          <input
            type="email"
            name="email"
            placeholder="Введите свой email"
            autoComplete="email"
          />
        </div>
      </div>
    </Footer>
  );
}

export default Footer;
