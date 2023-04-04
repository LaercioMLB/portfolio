import { useState, useContext } from "react";
import styles from "./styles.module.css";
import {
  IoIosArrowForward,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MenuContext } from "src/context/MenuContext";
import Animate from "src/components/Animation";

enum SELECTED {
  webdesign,
  webDev,
  mobileDev,
}

const LIST_PROJECTS = [
  {
    logo: <FaDocker className={styles.logoItem} />,
    name: "Adaptour",
    info: "Project idealized for Hackatour Cataratas 2023",
    description: "Portfolio version for the year 2021",
    open: false,
    type: SELECTED.webDev,
  },
  {
    logo: <FaDocker className={styles.logoItem} />,
    name: "Idea",
    info: "Portfolio version for the year 2021",
    description: "Portfolio version for the year 2021",
    open: false,
    type: SELECTED.webDev,
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
                projectSelected === SELECTED.webdesign
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.webdesign)}
            >
              WEBDESIGN
            </div>
          </Animate.ScaleIn>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.webDev
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.webDev)}
            >
              WEB DEV.
            </div>
          </Animate.ScaleIn>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.mobileDev
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.mobileDev)}
            >
              MOBILE DEV.
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
