import Image from "next/image"
import Layout from "../../components/layout";
import { formatearFecha } from "../../utils/helpers"
import styles from '../../styles/blog.module.css'


const Post = ({ post }) => {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <Layout
    title={`${titulo}`}
    description={'Blog de música, venta de guitarras, consejos, GuitarLA'}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={600}
          alt={`Imagen blog ${titulo}`}
        />

        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  //Esta onda se usa cuando estas usando el static Props pero con un routing dinamico: como buscando un articulo por medio de un url o id
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data } = await respuesta.json();

  const paths = data.map((post) => ({
    params: {
      //forma exclusiva de hacerlo
      url: post.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false, // error de 404 por si el objeto no existe
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();
  return {
    props: {
      post,
    },
  };
}
