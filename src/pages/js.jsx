import { useState } from "react";
import "../styles/js.css";

function JS() {
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
    <div className="js-container">
      <h1 className="titulo">JavaScript</h1>
      <p className="descripcion">
        JavaScript es un lenguaje de programación que se utiliza principalmente
        para crear efectos interactivos en páginas web. Es un lenguaje de
        programación de alto nivel, interpretado y orientado a objetos.
      </p>
      <img src="../../public/js1.png" className="imagen" />
      <p className="infoImagen">
        Imagen: Código JavaScript aplicado en la pregunta que hay abajo
      </p>
      <img src="../../public/js2.png" className="imagen" />
      <p className="descripcion">
        JavaScript permite a los desarrolladores web crear aplicaciones web
        dinámicas y mejorar la experiencia del usuario al permitir la
        manipulación del contenido de la página sin necesidad de recargarla.
        Además, JavaScript se utiliza en conjunto con HTML y CSS para crear
        sitios web modernos y atractivos.
      </p>
      <div className="pregunta">
        <h2 className="subtitulo">Pregunta:</h2>
        <p className="pregunta-texto">
          ¿Qué es JavaScript y para qué se utiliza en el desarrollo web?
        </p>
        <div className="respuesta">
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Estructurar el contenido visual y los textos de una página web
            mediante etiquetas estáticas.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Diseñar los colores, los estilos, las fuentes y la distribución
            visual de los elementos en la pantalla.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(1)}>
            Añadir interactividad, animaciones, validación de formularios y
            contenido dinámico que responde al usuario.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Gestionar y administrar de forma nativa los servidores físicos de
            una empresa de hosting
          </button>
        </div>
        <div className="resultado">{vistaResultado()}</div>
      </div>
    </div>
  );
}

export default JS;
