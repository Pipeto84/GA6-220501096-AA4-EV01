import "../styles/css.css";

function CSS() {
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

    </div>
  );
}

export default CSS;
