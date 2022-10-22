import {
  WrapperSection,
  ContentDesarrollo,
  Subtitle,
  TitleH3,
  Content,
  IconsProgran,
  PhotoR,
} from "./ProcesoElements";
import { Container } from "../GloblaElements";
import { motion } from "framer-motion";

export default function SecionContenido(props) {
  return (
    <Container>
      <WrapperSection>
        <PhotoR data-aos="fade-right">
          <motion.img
            as={motion.div}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3}}
            whileTap={{ scale: 0.9 }}
            src={props.objeto.Photo}
            width="100%"
            alt="Portada del Proceso" 
            title="Portada" 
            loading="lazy"  
          />
        </PhotoR>
        <ContentDesarrollo data-aos="fade-left">
          <Subtitle>{props.objeto.Subtitle}</Subtitle>
          <TitleH3>{props.objeto.Title}</TitleH3>
          <Content>{props.objeto.Content}</Content>
          <IconsProgran>
            <motion.img
              as={motion.div}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              src={props.objeto.Icon}
              alt={props.objeto.Alt}
              loading={props.objeto.Lazy}
              title={props.objeto.Alt}
            />
          </IconsProgran>
        </ContentDesarrollo>
      </WrapperSection>
    </Container>
  );
}
