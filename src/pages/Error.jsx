import { ContainerError } from "../components/GloblaElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//JSX
export default function Error() {
  return (
    <section>
      <ContainerError
        as={motion.div}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2>Error 404 😵</h2>
          <p>Esta pagina no existe</p>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link>
        </div>
      </ContainerError>
    </section>
  );
}
