import styles from "./styles.module.css";
import { MdDesignServices, MdWebAsset, MdMobileFriendly } from "react-icons/md";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";
import MenuContext, { SELECTED } from "src/context/MenuContext";
import { useContext } from "react";
import Animate from "src/components/Animation";

const INFO_CARDS = [
  {
    context: SELECTED.pipeline,
    type: "PIPELINES CI/CD",
    number: "01",
    icon: <MdDesignServices className={styles.iconCard} />,
    title: "Trabalhando com automação",
    text: "Criação de esteiras automatizadas usando tecnologia Jenkins e Azure Pipelines, aonde automatiza o deploy da aplicação, e notifica no email a realização do build.",
  },
  {
    context: SELECTED.cloud,
    type: "OBSERVABILIDADE",
    number: "02",
    icon: <MdMobileFriendly className={styles.iconCard} />,
    title: "Troubleshooting",
    text: "Trabalhando com ferramentas como New Relic, Prometheus, Jaeger e Loki. Trabalhando para analisar métricas da infraestrutura e apicação.",
  },
  {
    context: SELECTED.container,
    type: "CONTAINERS",
    number: "03",
    icon: <MdWebAsset className={styles.iconCard} />,
    title: "Trabalhando com containers",
    text: "Foco no desenvolvimento de alto desempenho e escalabilidade, entregando soluções web personalizadas para sua empresa.",
  },
  {
    context: SELECTED.cloud,
    type: "FERRAMENTAS AWS",
    number: "04",
    icon: <MdWebAsset className={styles.iconCard} />,
    title: "AWS Cloud",
    text: "Conhecimento com: S3, Instancias EC2, Deploy com ElasticBeanstalk, Faznedo triggers com Lambda e NewRelic, Logs com CloudWatch",
  },
  {
    context: SELECTED.cloud,
    type: "FERRAMENTAS AZURE",
    number: "05",
    icon: <MdWebAsset className={styles.iconCard} />,
    title: "Azure DevOps",
    text: "Trabalhando com workspace Azure Devops, centralizando o repositório, as pipelines, os testes automatizados, backlogs e também as metodologias agéis, maracando e centralizando tarefas.",
  },
];

function WhatIDoPage() {
  const { t } = useTranslation("whatIdo");
  const { setProjectSelected } = useContext(MenuContext);
  return (
    <div className={styles.content}>
      <Animate.FadeIn>
        <h2 className={styles.title}>{t("O que eu faço")}</h2>
      </Animate.FadeIn>

      <div className={styles.cardArea}>
        <AliceCarousel
          autoWidth={true}
          mouseTracking
          disableDotsControls={true}
          disableButtonsControls={true}
        >
          {INFO_CARDS.map((info, index) => (
            <div key={index} className={styles.marginCard}>
              <div className={styles.card}>
                <div className={styles.internCard}>
                  <div>
                    <div className={styles.internCardNumber}>{info.number}</div>
                    <div className={styles.internCardType}>{info.type}</div>
                  </div>
                  {info.icon}
                </div>
                <h3 className={styles.titleCard}>{t(info.title)}</h3>
                <p className={styles.textCard}>{t(info.text)}</p>
                <a
                  href="#projects"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <BsFillCloudArrowDownFill
                    className={styles.iconRol}
                    onClick={() => setProjectSelected(info.context)}
                  />
                </a>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default WhatIDoPage;
