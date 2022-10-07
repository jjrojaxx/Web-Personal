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
  Card4,
  Wrap,
  Contenido
} from "./PortafolioElement";
import { ContainerWhiteBlue, TitleSection } from "../GloblaElements";
import { motion } from "framer-motion";

import ZaaltoHotel from "../../assets/portada-zaalto-hotel.png";

export default function Portafolio() {
  return (
    <ContainerWhiteBlue id="portafolio">
      <WrapperSection>
        <SeccionTwo>
          <Wrap>
            <a href="https://fonts.google.com/">
              <Card
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <Photo>
                  <img src={ZaaltoHotel} alt="" width="100%" />
                </Photo>
                <BgBlack>
                  <CardTitle>Zaalto-Hotel</CardTitle>
                  <CardContent>
                    Sitio web de una agentecia es un ejemplo del trabajo que se
                    realiza.
                  </CardContent>
                  <a href="https://fonts.google.com/">
                    <LinkMore>Read more</LinkMore>
                  </a>
                </BgBlack>
              </Card>
            </a>
            <a href="https://fonts.google.com/">
              <Card2
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <Photo>
                  <img src={ZaaltoHotel} alt="" width="100%" />
                </Photo>
                <BgBlack>
                  <CardTitle>Zaalto-Hotel</CardTitle>
                  <CardContent>
                    Sitio web de una agentecia es un ejemplo del trabajo que se
                    realiza.
                  </CardContent>
                  <a href="https://fonts.google.com/">
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
                 <span>⚠️ Los proyectos estan en proceso de desarrollo</span>
                </Content>
              </Contenido>
            </ContentTitle>
            <a href="https://fonts.google.com/">
              <Card3
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                  <Photo>
                    <img src={ZaaltoHotel} alt="" width="100%" />
                  </Photo>
                  <BgBlack>
                    <CardTitle>Zaalto-Hotel</CardTitle>
                    <CardContent>
                      Sitio web de una agentecia es un ejemplo del trabajo que
                      se realiza.
                    </CardContent>
                    <a href="https://fonts.google.com/">
                      <LinkMore>Read more</LinkMore>
                    </a>
                  </BgBlack>
              </Card3>
            </a>
            <a href="https://fonts.google.com/">
              <Card4
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <Photo>
                  <img src={ZaaltoHotel} alt="" width="100%" />
                </Photo>
                <BgBlack>
                  <CardTitle>Zaalto-Hotel</CardTitle>
                  <CardContent>
                    Sitio web de una agentecia es un ejemplo del trabajo que se
                    realiza.
                  </CardContent>
                  <a href="https://fonts.google.com/">
                    <LinkMore>Read more</LinkMore>
                  </a>
                </BgBlack>
              </Card4>
            </a>
          </Wrap>
        </SeccionTwo>
      </WrapperSection>
    </ContainerWhiteBlue>
  );
}
