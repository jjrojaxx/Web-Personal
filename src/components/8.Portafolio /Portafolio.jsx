import {
  WrapperSection,
  ColTwo,
  LineBlue,
  Content,
  SeccionTwo,
  ContentTitle,
  Wrap,
  Contenido,
  LenguajesUse,
} from "./PortafolioElement";
import { ContainerWhiteBlue, TitleSection } from "../GloblaElements";
import Cards from "./Card";
import { motion } from "framer-motion";

import portadaOne from "../../assets/portada1.png";
import portadaTwo from "../../assets/portada2.png";
import portadaThere from "../../assets/portada3.png";
import portadaFour from "../../assets/port.png";
import iconWordpress from "../../assets/icon-wordpress.svg";
import iconReact from "../../assets/porfolio-react-icon.svg";
import iconGithub from "../../assets/porfolio-github-icon.svg";
const images = [iconWordpress];
const imagesTwo = [iconReact, iconGithub];

export default function Portafolio() {
  return (
    <section>
      <ContainerWhiteBlue id="portafolio">
        <WrapperSection>
          <SeccionTwo>
            <Wrap>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href="https://papeleriaelaljibe.com/"
                  data-aos="fade-up"
                  target="Blank"
                >
                  <LenguajesUse>
                    {images.map((image) => (
                      <img
                        src={image}
                        alt="Lenguajes"
                        title="Leguajes"
                        loading="lazy"
                      />
                    ))}
                  </LenguajesUse>
                  <Cards
                    objeto={{
                      Photo: portadaTwo,
                      Title: "El aljibe",
                      Content: "Sitio web Realizado en wordpress",
                    }}
                  ></Cards>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href="https://carcrossuruguay.com/"
                  data-aos="fade-up"
                  target="Blank"
                >
                  <LenguajesUse>
                    {images.map((image) => (
                      <img
                        src={image}
                        alt="Lenguajes"
                        title="Leguajes"
                        loading="lazy"
                      />
                    ))}
                  </LenguajesUse>
                  <Cards
                    objeto={{
                      Photo: portadaOne,
                      Title: "Karcross",
                      Content: "Sitio web Realizado en wordpress",
                    }}
                  />
                </a>
              </motion.div>
            </Wrap>
            <Wrap>
              <ContentTitle>
                <Contenido data-aos="fade-up">
                  <ColTwo>
                    <TitleSection>Portafolio 💼</TitleSection>
                    <LineBlue />
                  </ColTwo>
                  <Content>
                    Algunos de mis trabajos realizados
                    <br />
                    <span>⚠️ Algunos proyectos estan en proceso</span>
                  </Content>
                </Contenido>
              </ContentTitle>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href="https://multicontainer.com/"
                  data-aos="fade-up"
                  target="Blank"
                >
                  <LenguajesUse>
                    {images.map((image) => (
                      <img
                        src={image}
                        alt="Lenguajes"
                        title="Leguajes"
                        loading="lazy"
                      />
                    ))}
                  </LenguajesUse>
                  <Cards
                    objeto={{
                      Photo: portadaThere,
                      Title: "Multi Container",
                      Content: "Sitio web Realizado en wordpress",
                    }}
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href="https://jhoanrojas.com/"
                  data-aos="fade-up"
                  target="Blank"
                >
                  <LenguajesUse>
                    {imagesTwo.map((image) => (
                      <img
                        src={image}
                        alt="Lenguajes"
                        title="Leguajes"
                        loading="lazy"
                      />
                    ))}
                  </LenguajesUse>
                  <Cards
                    objeto={{
                      Photo: portadaFour,
                      Title: "Jhoan Rojas | Marca Personal",
                      Content: "Sitio web realizado con react.js",
                    }}
                  />
                </a>
              </motion.div>
            </Wrap>
          </SeccionTwo>
        </WrapperSection>
      </ContainerWhiteBlue>
    </section>
  );
}
