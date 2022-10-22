import {
    Card,
    Photo,
    BgBlack,
    CardTitle,
    CardContent,
    LinkMore,
  } from "./PortafolioElement";

export default function Cards(props) {
    return (
      <Card >
        <Photo>
          <img src={props.objeto.Photo} alt="Proyecto" width="100%" title="Proyecto" loading="lazy" />
        </Photo>
        <BgBlack>
          <CardTitle>{props.objeto.Title}</CardTitle>
          <CardContent>{props.objeto.Content}</CardContent>
          <LinkMore>Ver mas</LinkMore>
        </BgBlack>
      </Card>
    );
  }