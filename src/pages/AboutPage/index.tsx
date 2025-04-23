import styles from "./styles.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { perfil } from "src/assets";
import Animate from "src/components/Animation";

const LINK_LINKEDIN = "https://www.linkedin.com/in/laercio-bubiak/";
const LINK_GITHUB = "https://github.com/LaercioMLB";

function AboutPage() {
  return (
    <div className={styles.content}>
      <div className={styles.backgroundRadial} />
      <img
        alt="character-sketch"
        className={styles.characterSketch}
        src={perfil}
      />
      <Animate.FadeUp>
        <h1>LAÉRCIO</h1>
      </Animate.FadeUp>
      <Animate.FadeUp>
        <h1>BUBIAK</h1>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h2>Cloud Architect | Devops | AWS | Newtorking | Security</h2>
      </Animate.ScaleIn>
      <div className={styles.socialLinks}>
        <Animate.FadeIn>
          <BsLinkedin
            className={styles.icon}
            onClick={() => window.open(LINK_LINKEDIN, "_blank")}
          />
        </Animate.FadeIn>
        <Animate.FadeIn>
          <BsGithub
            className={styles.icon}
            onClick={() => window.open(LINK_GITHUB, "_blank")}
          />
        </Animate.FadeIn>
      </div>
    </div>
  );
}

export default AboutPage;
