import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main>
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              lobortis lectus et augue convallis, sed iaculis nunc dapibus.
              Suspendisse a malesuada dolor, a scelerisque nisi. Sed dapibus
              augue id ipsum molestie, et hendrerit urna congue. Duis ac lorem
              sit amet nisi fermentum hendrerit. Nam ultrices congue magna, in
              commodo tortor ornare ut. Donec sapien metus, dignissim id nunc
              et, mollis laoreet ante. Vestibulum lacinia cursus blandit.
              Phasellus cursus sem eget vestibulum pretium. Aliquam at
              consectetur justo, at venenatis dui. Ut imperdiet eget metus eget
              pharetra.
            </p>
            <p>
              Morbi tincidunt non ipsum a viverra. Sed consectetur tristique
              erat in maximus. Ut vitae blandit erat. Nulla ultrices consectetur
              urna. Cras purus nunc, finibus eget auctor pretium, tristique sit
              amet orci. Phasellus interdum, libero ac fermentum mattis, eros
              massa malesuada elit, tristique tempus ipsum diam nec nibh. Nullam
              luctus nec justo eu molestie. Phasellus pretium eros turpis, quis
              aliquam felis dictum sed. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
