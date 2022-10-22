// Importaciones
import {
  Subtitle,
  ColTwo,
  WrapperSection,
  BtnContact,
  LineBlueTwoLeft,
  TitleSection,
} from "./ElementsContacto";
import { ContainerWhite, LineBlueTwo } from "../GloblaElements";

export default function Contacto() {
  return (
    <section>
      <ContainerWhite id="contacto">
        <WrapperSection data-aos="fade-up">
          <ColTwo>
            <LineBlueTwoLeft />
            <TitleSection>Contacto</TitleSection>
            <LineBlueTwo />
          </ColTwo>
          <Subtitle>Espero tu mensaje</Subtitle>
          <a
            href="mailto:info.josephleal@gmail.com?subject=Contacto%20desde%20Josephleal.com"
            target="Blank"
          >
            <BtnContact>Contactame a mi correo</BtnContact>
          </a>
        </WrapperSection>
      </ContainerWhite>
    </section>
  );
}
