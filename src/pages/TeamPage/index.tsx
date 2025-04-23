import { useState, useContext } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { didi, riri, vivi, doni, emilio } from "src/assets";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Animate from "src/components/Animation";

const TEAM_LIST = [
  {
    img: didi,
    name: "Dionei Biancati",
    work: "Frontend Developer",
    link: "https://www.dionei.com",
  },
  {
    img: vivi,
    name: "Vinicios Engelage",
    work: "UI/UX Software Engineering",
    link: "https://www.viniengelage.com",
  },
  {
    img: riri,
    name: "Riad Younes",
    work: "Software Engineering",
    link: "https://www.linkedin.com/in/riad-younes-6a5348187/",
  },
  {
    img: doni,
    name: "Donizeti Junior",
    work: "Infra/Sec",
    link: "https://www.linkedin.com/in/donizetijunior/",
  },
  {
    img: emilio,
    name: "Emílio Anastacio",
    work: "Data Analyst/Sec",
    link: "https://www.linkedin.com/in/emilio-anastacio/",
  },
];

function TeamPage() {
  const { t } = useTranslation("team");

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.content}>
        <Animate.FadeIn>
          <h2 className={styles.title}>{t("Equipe que ja trabalhei!")}</h2>
        </Animate.FadeIn>
        <div className={styles.team}>
          <AliceCarousel
            autoWidth={true}
            mouseTracking
            disableDotsControls={true}
            disableButtonsControls={true}
          >
            {TEAM_LIST.map((value, index) => (
              <li
                key={index}
                className={styles.item}
                onClick={() => window.open(value.link, "_blank")}
              >
                <Animate.ScaleIn>
                  <img alt="img" className={styles.image} src={value.img} />
                </Animate.ScaleIn>
                <Animate.FadeUp>
                  <div className={styles.name}>{value.name}</div>
                </Animate.FadeUp>

                <div className={styles.work}>{value.work}</div>
              </li>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
