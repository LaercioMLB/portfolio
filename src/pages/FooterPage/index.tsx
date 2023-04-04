import Footer from "src/features/Footer";
import styles from "./styles.module.css";
import { developer2 } from "src/assets";
import { useTranslation } from "react-i18next";

function FooterPage() {
  const { t } = useTranslation("footer");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {t("Preparado")} <br /> {t("para tirar sua")} <br /> {t("ideia do")}{" "}
          <br /> {t("papel")}?
        </h3>
        <img
          alt="character-sketch"
          className={styles.character}
          src={developer2}
        />
      </div>
      <Footer />
    </div>
  );
}

export default FooterPage;
