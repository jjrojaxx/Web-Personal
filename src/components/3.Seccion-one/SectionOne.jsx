import { ContainerWhite, WrapperSection, Photo, Content, TitleSection, ContentP} from "../GloblaElements";
import PhotoImac from '../../assets/photo-imac.png'
export default function SectionOne(){
    return(
    <ContainerWhite id="sobre">
        <WrapperSection>
            <Photo>
                <img src={PhotoImac} width='100%' alt="Imac"/>
            </Photo>
            <Content>
                <TitleSection>Buscas un sitio web</TitleSection>
                <ContentP>
                Desarrollo de sitios webs interactivos con impacto visual para tus
                clientes encontrando las mejores soluciones a sus problemas
                </ContentP>
            </Content>
        </WrapperSection>
    </ContainerWhite>
    )
}