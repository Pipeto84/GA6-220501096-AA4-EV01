import "../styles/css.css";
import { useState } from "react";

function CSS() {
  const [resultado, setResultado] = useState(0);
  const vistaResultado = () => {
    if (resultado === 1) {
      return <p className="respuesta-correcta">¡Respuesta correcta!</p>;
    } else if (resultado === 2) {
      return <p className="respuesta-incorrecta">Respuesta incorrecta</p>;
    } else {
      return null;
    }
  };

  return (
    <div className="css-container">
      <h1 className="titulo">CSS</h1>
      <p className="descripcion">
        CSS, que significa Cascading Style Sheets (Hojas de Estilo en Cascada),
        es un lenguaje utilizado para describir la presentación y el diseño de
        un documento HTML. Mientras que HTML se encarga de estructurar el
        contenido de una página web, CSS se encarga de definir cómo se verá ese
        contenido, incluyendo aspectos como colores, fuentes, tamaños, márgenes
        y disposición de los elementos.
      </p>
      <img src="../../public/css1.png" className="imagen" />
      <p className="infoImagen">
        Imagen 1: Código CSS aplicado a los elementos HTML de esta página web
      </p>
      <p className="descripcion">
        CSS permite separar la estructura del contenido (HTML) de su
        presentación, lo que facilita el mantenimiento y la actualización del
        diseño de un sitio
      </p>
      <div className="pregunta">
        <h2 className="subtitulo">Pregunta:</h2>
        <p className="pregunta-texto">
          ¿Cuál es la utilidad principal de CSS en el desarrollo web?
        </p>
        <div className="respuesta">
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Programar la lógica del servidor y conectar bases de datos
            dinámicas.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Definir la estructura y el contenido de texto de una página web.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Gestionar el almacenamiento local de los usuarios en el navegador.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(1)}>
            Describir la presentación visual, el diseño, los colores y las
            tipografías de un documento.
          </button>
        </div>
        <div className="resultado">{vistaResultado()}</div>
      </div>
    </div>
  );
}

export default CSS;
