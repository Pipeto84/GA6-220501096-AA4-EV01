import { useState } from "react";
import "../styles/html.css";
import html1 from "../../public/html1.png";
import html2 from "../../public/html2.png";

function HTML() {
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
    <div className="html-container">
      <h1 className="titulo">HTML</h1>
      <p className="descripcion">
        HTML, que significa HyperText Markup Language (Lenguaje de Marcado de
        Hipertexto), es el lenguaje estándar utilizado para crear y estructurar
        el contenido de las páginas web. A diferencia de los lenguajes de
        programación tradicionales, HTML es un lenguaje de marcado que utiliza
        etiquetas para indicar al navegador cómo debe organizar y mostrar
        diferentes elementos de una página.
      </p>
      <img src={html1} className="imagen" />
      <p className="infoImagen">
        Imagen 1: Estructura básica de un documento HTML
      </p>
      <p className="descripcion">
        HTML normalmente se utiliza junto con CSS y JavaScript. CSS permite
        definir el diseño y la apariencia visual de la página, mientras que
        JavaScript permite agregar interactividad y funcionalidades dinámicas.
        La combinación de estas tres tecnologías constituye una de las bases
        fundamentales del desarrollo web. En conclusión, HTML es una herramienta
        esencial para el desarrollo de sitios web, ya que permite crear la
        estructura y organizar la información que será presentada al usuario. Su
        conocimiento es fundamental para cualquier persona que desee aprender
        desarrollo web y crear páginas modernas, accesibles y funcionales.
      </p>
      <img src={html2} className="imagen" />
      <p className="infoImagen">
        Imagen 2: Codigo HTML con etiquetas y contenido de esta página web
      </p>
      <p className="descripcion">
        En conclusión, HTML es una herramienta esencial para el desarrollo de
        sitios web, ya que permite crear la estructura y organizar la
        información que será presentada al usuario. Su conocimiento es
        fundamental para cualquier persona que desee aprender desarrollo web y
        crear páginas modernas, accesibles y funcionales.
      </p>
      <div className="pregunta">
        <h2 className="subtitulo">Pregunta:</h2>
        <p className="pregunta-texto">
          ¿Cuál es la función principal de HTML en el desarrollo web?
        </p>
        <div className="respuesta">
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Dar estilos visuales, colores y diseño a los elementos de la página.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(1)}>
            Estructurar, organizar y definir el contenido básico de una página
            web (como textos, imágenes y enlaces).
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Programar la lógica interactiva, funciones y animaciones del sitio
            web.
          </button>
          <button className="boton-respuesta" onClick={() => setResultado(2)}>
            Administrar y almacenar las bases de datos de un servidor web.
          </button>
        </div>
        <div className="resultado">{vistaResultado()}</div>
      </div>
    </div>
  );
}

export default HTML;
