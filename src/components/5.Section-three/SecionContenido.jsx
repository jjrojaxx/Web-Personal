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
        <PhotoR>
          <motion.img
            as={motion.div}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3}}
            whileTap={{ scale: 0.9 }}
            src={props.objeto.Photo}
            alt="Notion"
            width="100%"
          />
        </PhotoR>
        <ContentDesarrollo>
          <Subtitle>{props.objeto.Subtitle}</Subtitle>
          <TitleH3>{props.objeto.Title}</TitleH3>
          <Content>{props.objeto.Content}</Content>
          <IconsProgran>
            <motion.img
              as={motion.div}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              src={props.objeto.Icon}
              alt="Icons"
            />
          </IconsProgran>
        </ContentDesarrollo>
      </WrapperSection>
    </Container>
  );
}
