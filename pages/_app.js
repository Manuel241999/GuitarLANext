import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {              //lO CONVERTIRS DE STRING A ARRAY OTRA VEZ   // el primer [] es por si es primera vez que ingresa.
  const  carritoLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('carrito')) ?? [] : [] //Comprovamos que el codigo se ejecute solo en el cliente porque Next es Hibrido
  const [carrito, setCarrito] = useState(carritoLS);
  const [paginaLista,setPaginaLista] = useState(false)
  
  //NOTA NIVEL DIOS: Next al igual que Remix, renderizan lo que tengas en el cliente y lo va a sincronizar con el Servidor, por lo que si encuentra inconsistencias, va lanzar el error de hydratación.
  useEffect(() => {
    setPaginaLista(true)
  }, [])
  
  /////// Fin de solucion de Hydratacion /////////
  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }, [carrito])
  

  const agregarCarrito = (guitarra) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id != id);
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad);
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return paginaLista ?  //importante
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
    /> : null//importante

}

export default MyApp;
