import { Container, Wrapper, BtnBlack } from "./CtaElements";
import { TitleSectionWhite } from "../GloblaElements";
import { Link as Scroll } from "react-scroll";
export default function Cta() {
  return (
    <section>
      <Container>
        <Wrapper>
          <TitleSectionWhite data-aos="fade-up">
            ¿ Deseas ponerte en contacto conmigo ?
          </TitleSectionWhite>
          <BtnBlack data-aos="fade-up">
            <Scroll
              className="pointer"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
            >
              Contactame
            </Scroll>
          </BtnBlack>
        </Wrapper>
      </Container>
    </section>
  );
}
