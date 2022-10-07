import {
    WrapperSection,
    Subtitle,
    TitleH3,
    Content,
    IconsProgran,
    ContentDesarrolloTwo,
    PhotoL
  } from "./ProcesoElements";
  import { Container } from "../GloblaElements";
  import { motion } from "framer-motion";
export default function SecionContenidoTwo(props) {
    return (
      <Container>
        <WrapperSection>
          <ContentDesarrolloTwo>
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
          </ContentDesarrolloTwo>
          <PhotoL>
            <motion.img 
              as={motion.div}
              whileHover={{ scale: 1.01 }}   
              transition={{ duration: 0.3 }}  
              whileTap={{ scale: 0.9 }}       
              src={props.objeto.Photo} 
              alt="Notion" 
              width='100%' 
              />
          </PhotoL>
        </WrapperSection>
      </Container>
    );
  }
  