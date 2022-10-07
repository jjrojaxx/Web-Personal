//Importaciones
import Header from "./components/1.Navbar/Header";
import Hero from "./components/2.Hero/Hero";
import SectionThree from "./components/5.Section-three/ProcesoDeDesarrollo";
import Cta from "./components/6.Cta/Cta";
import Herramientas from "./components/7.Herramientas/Herramientas";
import Portafolio from "./components/8.Portafolio /Portafolio";
import SobreMi from "./components/9.Sobre-mi/SobreMi";
import Contacto from "./components/10.Contato/Contacto";
import Footer from "./components/11.Footer/Footer";
//JSX
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Herramientas />
      <SectionThree />
      <Cta />
      <Portafolio />
      <SobreMi />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
