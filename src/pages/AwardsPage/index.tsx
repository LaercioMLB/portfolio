import styles from "./styles.module.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { suporte, devops, cloudops, cloudarq, organizadin, professor } from "src/assets";
import { useTranslation } from "react-i18next";

const AWARDS_LIST = [
  {
    year: "2025",
    title: "UNIAMERICA - Professor Universitário",
    logo: <img alt="icon" className={styles.iconCard} src={professor} />,
    text: "Realizando meu sonho de estar junto com a próxima geração de T.I aplicando minhas experiencias de operações em nuvem e DevOps, estando junto com a inovação.",
  },
  {
    year: "2024",
    title: "Valloo - Especialista em operações de T.I",
    logo: <img alt="icon" className={styles.iconCard} src={cloudops} />,
    text: "Lidero toda a parte de ferramentas AWS desde segurança, redes, cotação, migrações e automações.",
  },
  {
    year: "2024",
    title: "FIXECRM - Arquiteto Cloud",
    logo: <img alt="icon" className={styles.iconCard} src={cloudarq} />,
    text: "Projeto com duração de 6 para uma migração de containers PM2 para uma infraestrutura estavel e escalável utilizando AWS ECS e migrando banco de dados, junto a isso automação de deploy CI/CD",
  },
  {
    year: "2024",
    title: "Organizadin - Arquiteto Cloud",
    logo: <img alt="icon" className={styles.iconCard} src={organizadin} />,
    text: "Projeto com duração 3 meses para criação de uma infraesturutra Cloud no ambiente Hostinger, tendo um ambiente de Desenvolvimento e produção para o produto, garantindo conformidade e escalabilidade.",
  },
  {
    year: "2023",
    title: "TreeID - Analista DevOps",
    logo: <img alt="icon" className={styles.iconCard} src={devops} />,
    text: "Consolidando minha experiência em CPDs físicos, indo para o mundo Cloud com foco na cultura DevOps utilizando recursos AWS migrando infraestrutura para containers ECS + Automação de pipelines CI/CD com Azure DevOps",
  },
  {
    year: "2021",
    title: "Suporte Técnico",
    logo: <img alt="icon" className={styles.iconCard} src={suporte} />,
    text: "Meu início, onde desenvolvi uma sólida base de conhecimento em servidores, redes e sistemas operacionais.",
  },

];

function AwardsPage() {
  const { t } = useTranslation("awards");
  const clickButton = (id: string) => {
    const botao = document.getElementById(id);
    if (botao === null) return;
    botao.click();
  };
  return (
    <div className={styles.container}>
      <div className={styles.dashLine} />
      <div className={styles.content}>
        <div className={styles.navigation}>
          <div className={styles.title}>{t("Experiências")}</div>
          <div>
            <IoIosArrowDropleftCircle
              onClick={() => clickButton("back")}
              className={styles.button}
            />
            <IoIosArrowDroprightCircle
              onClick={() => clickButton("next")}
              className={styles.button}
            />
          </div>
        </div>
        <div className={styles.carousel}>
          <AliceCarousel
            autoWidth={true}
            mouseTracking
            disableDotsControls={true}
            renderPrevButton={() => {
              return <div id="back" />;
            }}
            renderNextButton={() => {
              return <div id="next" />;
            }}
          >
            {AWARDS_LIST.map((info, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.year}>{info.year}</div>
                {info.logo}
                <h3>{info.title}</h3>
                <div className={styles.text}>{t(info.text)}</div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}

export default AwardsPage;
