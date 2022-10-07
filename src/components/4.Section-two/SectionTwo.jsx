import { ContainerWhite, WrapperSection, Photo, Content, TitleSection, ContentP} from "../GloblaElements";
import PhotoLaptop from '../../assets/laptop-space.png'
export default function SectionOne(){
    return(
    <ContainerWhite>
        <WrapperSection>
            <Content>
                <TitleSection>¿Un mejor diseño? </TitleSection>
                <ContentP>
                Si eres de lo que has llegado aquí buscando una mejor apariencia para tu sitio web has encontado el lugar correcto, diseño UX/UI una manera intuitiva y amigable de solucionar un problema en función de los gustos, necesidades y opiniones de los usuarios de un producto o servicio. 
                </ContentP>
            </Content>
            <Photo>
                <img src={PhotoLaptop} width='100%' alt="Laptop"/>
            </Photo>
        </WrapperSection>
    </ContainerWhite>
    )
}