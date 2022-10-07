import {
  WrapperSection,
  ColTwo,
  LineBlue,
  Content,
  SeccionTwo,
  Card,
  Photo,
  BgBlack,
  CardTitle,
  CardContent,
  LinkMore,
  ContentTitle,
  Card2,
  Card3,
  Wrap,
  Contenido
} from "./PortafolioElement";
import { ContainerWhiteBlue, TitleSection } from "../GloblaElements";
import { motion } from "framer-motion";

import portadaOne from "../../assets/portada1.svg";
import portadaTwo from "../../assets/portada2.svg";
import portadaThere from "../../assets/portada3.svg";

export default function Portafolio() {
  return (
    <ContainerWhiteBlue id="portafolio">
      <WrapperSection>
        <SeccionTwo>
          <Wrap>
            <a href="https://papeleriaelaljibe.com/">
              <Card
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <Photo>
                  <img src={portadaTwo} alt="" width="100%" />
                </Photo>
                <BgBlack>
                  <CardTitle>El aljibe</CardTitle>
                  <CardContent>
                  </CardContent>
                  <a href="https://papeleriaelaljibe.com/">
                    <LinkMore>Read more</LinkMore>
                  </a>
                </BgBlack>
              </Card>
            </a>
            <a href="https://multicontainer.com/">
              <Card2
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <Photo>
                  <img src={portadaThere} alt="" width="100%" />
                </Photo>
                <BgBlack>
                  <CardTitle>Multi-Container</CardTitle>
                  <CardContent>
                  </CardContent>
                  <a href="https://multicontainer.com/">
                    <LinkMore>Read more</LinkMore>
                  </a>
                </BgBlack>
              </Card2>
            </a>
          </Wrap>
          <Wrap>
            <ContentTitle>
              <Contenido>
                <ColTwo>
                  <TitleSection>Portafolio 💼</TitleSection>
                  <LineBlue />
                </ColTwo>
                <Content>Algunos de mis trabajos realizados
                  <br />
                 <span>⚠️ Algunos proyectos estan en proceso</span>
                </Content>
              </Contenido>
            </ContentTitle>
            <a href="https://carcrossuruguay.com/">
              <Card3
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                  <Photo>
                    <img src={portadaOne} alt="" width="100%" />
                  </Photo>
                  <BgBlack>
                    <CardTitle>Karcross</CardTitle>
                    <CardContent>
                    </CardContent>
                    <a href="https://carcrossuruguay.com/">
                      <LinkMore>Read more</LinkMore>
                    </a>
                  </BgBlack>
              </Card3>
            </a>
          </Wrap>
        </SeccionTwo>
      </WrapperSection>
    </ContainerWhiteBlue>
  );
}
