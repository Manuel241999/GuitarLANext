import Layout from "../components/layout";
import Link from "next/link";

const Pagina404 = () => {
  return (
    <Layout
        title="Página no encontrada"
    >
      <p className="error">Página no encontrada</p>
      <Link className="error-enlace" href={'/'}>
        Ir a Inicio
      </Link>
    </Layout>
  );
};

export default Pagina404;
