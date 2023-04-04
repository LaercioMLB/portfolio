import { useState, useContext } from "react";
import styles from "./styles.module.css";
import {
  IoIosArrowForward,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import {SiKubernetes, SiJenkins, SiAzuredevops, SiAmazonec2, SiAwslambda, SiAmazonaws, SiAmazoncloudwatch} from "react-icons/si"
import { useTranslation } from "react-i18next";
import { MenuContext, SELECTED } from "src/context/MenuContext";
import Animate from "src/components/Animation";


const LIST_PROJECTS = [
  {
    logo: <FaDocker className={styles.logoItem} />,
    name: "Docker",
    info: "Conteinerização",
    description: "Docker é uma plataforma de virtualização de contêineres que permite criar, implantar e executar aplicativos em ambientes isolados e portáteis. Ele isola aplicativos em contêineres, que são ambientes independentes com suas próprias bibliotecas de dependências e arquivos de sistema. Esses contêineres são leves, portáteis e escaláveis, tornando-os ideais para implantação em nuvens públicas ou privadas. O Docker ajuda a simplificar o processo de implantação e gerenciamento de aplicativos em diferentes ambientes de hospedagem.",
    open: false,
    type: SELECTED.container,
  },
  {
    logo: <SiKubernetes className={styles.logoItem} />,
    name: "Kubernetes",
    info: "Orquestração de containers",
    description: "Kubernetes é uma plataforma de orquestração de contêineres que automatiza a implantação, o dimensionamento e o gerenciamento de aplicativos em contêineres. Ele fornece um conjunto de ferramentas e recursos para ajudar a gerenciar e orquestrar a distribuição de contêineres em um ambiente de cluster. Isso inclui recursos de dimensionamento automático, gerenciamento de estado, balanceamento de carga e alta disponibilidade. Kubernetes é amplamente utilizado em ambientes de produção para implantar e gerenciar aplicativos em contêineres de forma eficiente e confiável.",
    open: false,
    type: SELECTED.container,
  },
  {
    logo: <SiJenkins className={styles.logoItem} />,
    name: "Jenkins",
    info: "Pipelines CI/CD",
    description: "Jenkins é uma ferramenta de integração contínua de software que ajuda a automatizar o processo de construção, teste e implantação de software. Ele é usado para criar pipelines de integração contínua que automatizam a construção e os testes de software em diferentes plataformas e ambientes. O Jenkins é altamente configurável e pode ser integrado a outras ferramentas de desenvolvimento, como Git e Docker, para permitir uma integração mais completa. ",
    open: false,
    type: SELECTED.pipeline,
  },
  {
    logo: <SiAzuredevops className={styles.logoItem} />,
    name: "Azure Devops Pipelines",
    info: "Pipelines CI/CD",
    description: "Azure Pipelines é um serviço de integração contínua e entrega contínua (CI/CD) da Microsoft Azure que permite criar, testar e implantar aplicativos em diferentes plataformas e ambientes. Ele fornece ferramentas para criar pipelines automatizados que podem ser usados para construir, testar e implantar aplicativos em vários ambientes, como nuvens públicas, nuvens privadas e ambientes locais. ",
    open: false,
    type: SELECTED.pipeline,
  },
  {
    logo: <SiAzuredevops className={styles.logoItem} />,
    name: "Azure Devops ",
    info: "Gerenciamento de ciclo de vida de aplicativos",
    description: "O Azure DevOps permite que as equipes de desenvolvimento criem, testem e implantem aplicativos de maneira mais rápida e confiável. Ele oferece integração com várias ferramentas e serviços, como GitHub, Jenkins, Docker, Kubernetes e AWS, permitindo que as equipes usem as ferramentas que melhor se adaptam às necessidades do projeto.",
    open: false,
    type: SELECTED.cloud,
  },
  {
    logo: <SiAmazonec2 className={styles.logoItem} />,
    name: "AWS EC2 ",
    info: "Serviço de computação em nuvem",
    description: "Amazon Elastic Compute Cloud (EC2) é um serviço de computação em nuvem da AWS que fornece capacidade de computação escalável na nuvem.",
    open: false,
    type: SELECTED.cloud,
  },
  {
    logo: <SiAwslambda className={styles.logoItem} />,
    name: "AWS Lambda ",
    info: "Arquitetura serverless",
    description: "O AWS Lambda é uma opção popular para desenvolvedores que desejam implementar a arquitetura serverless e executar código em resposta a eventos específicos, sem ter que se preocupar com a configuração, gerenciamento e provisionamento de servidores.",
    open: false,
    type: SELECTED.cloud,
  },
  {
    logo: <SiAmazonaws className={styles.logoItem} />,
    name: "AWS ElasticBeanstalk ",
    info: "PaaS - Plataform as a Service",
    description: "AWS Elastic Beanstalk é um serviço gerenciado da Amazon Web Services (AWS) que facilita a implantação e o gerenciamento de aplicativos web em nuvem. Ele fornece uma plataforma para implantar, escalar e gerenciar aplicativos em vários ambientes, como AWS EC2, AWS Lambda e AWS Fargate.",
    open: false,
    type: SELECTED.cloud,
  },
  {
    logo: <SiAmazoncloudwatch className={styles.logoItem} />,
    name: "AWS Cloud Watch ",
    info: "Coleta de métricas e logs",
    description: "Com o CloudWatch, é possível monitorar métricas, como uso de CPU, tempo de resposta de solicitações, espaço em disco e muitas outras, e definir alertas para notificar automaticamente os usuários quando os limites definidos forem atingidos. Ele também oferece recursos de registro de logs, permitindo que os usuários capturem, monitorem e analisem logs de aplicativos em tempo real.    ",
    open: false,
    type: SELECTED.cloud,
  },
];

function ProjectsPage() {
  const { t } = useTranslation("projects");
  const { projectSelected, setProjectSelected } = useContext(MenuContext);
  const [faqs, setFaqs] = useState(LIST_PROJECTS);
  const handleSelect = (value: SELECTED) => {
    setProjectSelected(value);
  };

  const toggleFAQ = (index: any) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.content}>
        <Animate.FadeIn>
          <h2 className={styles.title}>{t("Ferramentas de trabalho")}</h2>
        </Animate.FadeIn>
        <div className={styles.buttonArea}>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.pipeline
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.pipeline)}
            >
              AUTOMAÇÃO
            </div>
          </Animate.ScaleIn>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.container
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.container)}
            >
              CONTAINERS
            </div>
          </Animate.ScaleIn>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.cloud
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.cloud)}
            >
              CLOUD
            </div>
          </Animate.ScaleIn>
        </div>

        <div className={styles.listArea}>
          {LIST_PROJECTS.map((value, index) =>
            value.type === projectSelected ? (
              <>
                <li
                  className={value.open ? styles.listItemOpen : styles.listItem}
                  key={index}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={styles.areaName}>
                    {value.logo}
                    <span className={styles.nameItem}>{value.name}</span>
                  </div>
                  <div className={styles.infoArea}>
                    <IoMdInformationCircleOutline className={styles.infoIcon} />
                    <p className={styles.infoText}>{t(value.info)}</p>
                  </div>

                  <IoIosArrowForward
                    className={
                      value.open ? styles.iconItemOpen : styles.iconItem
                    }
                  />
                </li>
                <div
                  className={
                    value.open
                      ? styles.itemDescriptionOpen
                      : styles.itemDescription
                  }
                >
                  {value.description}
                </div>
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
