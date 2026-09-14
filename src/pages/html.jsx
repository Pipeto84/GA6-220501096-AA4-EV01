import "../styles/html.css";

function HTML() {
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
      <img src="../../public/html1.png" className="imagen" />
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
      <img src="../../public/html2.png" className="imagen" />
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
    </div>
  );
}

export default HTML;
