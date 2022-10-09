import {
  WrapperSection,
  ColTwo,
  LineBlue,
  Content,
  SeccionTwo,
  ContentTitle,
  Wrap,
  Contenido,
} from "./PortafolioElement";
import { ContainerWhiteBlue, TitleSection } from "../GloblaElements";
import Cards from "./Card";

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
              <Cards
                objeto={{
                  Photo: portadaTwo,
                  Title: "El aljibe",
                  Content: "",
                }}
              />
            </a>

            <a href="https://carcrossuruguay.com/">
              <Cards
                objeto={{
                  Photo: portadaOne,
                  Title: "Karcross",
                  Content: "",
                }}
              />
            </a>

          </Wrap>
          <Wrap>
            <ContentTitle>
              <Contenido>
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
            <a href="https://multicontainer.com/">
              <Cards
                objeto={{
                  Photo: portadaThere,
                  Title: "Multi Container",
                  Content: "",
                }}
              />
            </a>
          </Wrap>
        </SeccionTwo>
      </WrapperSection>
    </ContainerWhiteBlue>
  );
}

