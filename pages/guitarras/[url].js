import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/guitarras.module.css";

const Producto = ({ guitarra, agregarCarrito }) => {

  const [cantidad, setCantidad] = useState(0)

  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1){
      alert('Cantidad no Válida')
      return
    }

    //Contruir Objeto:
    const guitarraSeleccionada = {
      id:guitarra[0].id,
      imagen:imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    }
      //Pasando a al context Global
      agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout
    title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen de guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form 
            className={styles.formulario}
            onSubmit={handleSubmit}
          >
            <label htmlFor="cantidad">Cantidad</label>

            <select 
             onChange={e => setCantidad(+e.target.value)}
             id="cantidad">
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit"  value='Agregar al Carrito'/>

          </form>

        </div>
      </div>
    </Layout>
  );
};

export default Producto;

export async function getStaticPaths() {
  //Esta onda se usa cuando estas usando el static Props pero con un routing dinamico: como buscando un articulo por medio de un url o id
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      //forma exclusiva de hacerlo
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false, // error de 404 por si el objeto no existe
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return {
    props: {
      guitarra,
    },
  };
}

//Desventaja de usar esto: Aqui tendria que visitar la API nuevamente y ademas la base de datos (entre menos se consulte, mejor, pueden pensar que es un ataque)

// export async function getServerSideProps({query: {url}}){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()
//     return{
//         props:{
//             guitarra
//         }
//     }
// }
