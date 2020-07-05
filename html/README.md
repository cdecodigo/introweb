# HTML

### Que es?

El HTML es un "lenguaje de marcado". Basa su sintaxis en un elemento base al que llamamos marca, tag o simplemente etiqueta. A través de las etiquetas vamos definiendo los elementos del documento, como enlaces, párrafos, imágenes, etc. Así pues, un documento HTML estará constituido por texto y un conjunto de etiquetas para definir la función que juega cada contenido dentro de la página.

>![Alt Text](https://i.ibb.co/R3jgbcR/6.png)

## Syntaxis

Son un conjunto de reglas que definen las secuencias correctas de los elementos de un lenguaje de programación. Aunque el HTML no es un lenguaje de programación, sino un lenguaje de marcas, en el HTML también existen una serie de reglas para que los documentos sean correctos.

_Generalidades_

- El carácter **<** (menor que) sólo puede utilizarse para indicar el comienzo de una etiqueta. Si se quiere mostrar el carácter <, se debe escribir la entidad de carácter &lt.

>![Alt Text](https://i.ibb.co/NLbwwVm/1.png)

## Tags (etiquetas)

Los tags presentan frecuentemente dos partes, su apertura y cierre, y se encierran ambas partes entre símbolos "menor que" y "mayor que".

- El nombre del elemento debe ir a continuación del carácter < (sin espacios)

> ![Alt Text](https://i.ibb.co/f9SM8Tj/3.png)

- El nombre del elemento en la etiqueta de cierre tiene que coincidir con el nombre en la etiqueta de apertura

>![Alt Text](https://i.ibb.co/LgF39k2/4.png)

- Los documentos HTML suelen tener un único elemento raíz de todo el documento, el elemento  &lt;html>, aunque puede omitirse.

>![Alt Text](https://i.ibb.co/zNrhJ4M/5.png)

### Titulos (h1 a h6)

- Las etiquetas  &lt;h1>,  &lt;h2>,  &lt;h3>,  &lt;h4>,  &lt;h5>  y  &lt;h6>  están pensadas para marcar los títulos y subtítulos de los apartados de un documento.
La hoja de estilo por omisión de los navegadores suele mostrar los títulos en tamaño cada vez más pequeño (incluso más pequeño que el tamaño de los párrafos  &lt;p>), en negrita y con márgenes mayores que los los párrafos  &lt;p>.

> ![Alt Text](https://i.ibb.co/D75Phn1/10.png)

- En principio, los títulos &lt;h1>, ..., &lt;h6> se deben utilizar de forma jerárquica, es decir, no saltándose niveles y utilizando títulos del mismo nivel para contenido de la misma categoría (apartados principales, subapartados, etc.).

### Listas

Existen tres tipos de listas:

-   listas ordenadas (&lt;ol> ...&lt;/ol>)

> ![Alt Text](https://i.ibb.co/PGLH1gJ/7.png)

-   listas no ordenadas (&lt;ul> ...&lt;/ul>)

> ![Alt Text](https://i.ibb.co/C0RPtkg/9.png)

-   listas de definición (&lt;dl> ...&lt;/dl>)

> ![Alt Text](https://i.ibb.co/7RNcsZJ/8.png)

Dentro de un elemento de lista se puede insertar cualquier otro elemento (texto, imágenes, divisiones, tablas, listas, etc).

### Images img 

- La etiqueta vacía  &lt;img>  permite mostrar imágenes vectoriales o de mapa de bits en una página web. Las imágenes no forman parte del documento, sino que se mantienen como archivos aparte.
Los ejemplos siguientes muestran la imagen de una estrella, como imagen vectorial (SVG) o como imagen de mapa de bits (PNG).

>![Alt Text](https://i.ibb.co/gwGCnRv/12.png)

- El atributo  src  de  &lt;img>

El atributo  src  contiene el camino absoluto o relativo a la imagen desde la página web. Para que el navegador pueda mostrar la imagen, el archivo referenciado debe estar disponible. Si los archivos de las páginas web o de las imágenes se cambian de carpeta o de nombre, hay que actualizar los atributos  src  para que apunten a la dirección correcta.
Los ejemplos siguientes muestran una dirección absoluta y una relativa en el atributo  src.

>![Alt Text](https://i.ibb.co/vVxWdx7/13.png)

- El atributo  alt  de  <img>

El atributo  alt  contiene el texto que deben mostrar los navegadores si la imagen no está disponible. El atributo  alt  no es obligatorio en HTML (sí lo era en XHTML), pero se recomienda incluirlo siempre, aunque sea con un valor vacío.
Los ejemplos siguientes muestran cómo los navegadores muestran la imagen cuando la imagen se encuentra disponible o el texto del atributo  alt  cuando la imagen no se encuentra disponible.

>![Alt Text](https://i.ibb.co/kJX4pGB/14.png)

- El atributo  title  de  <img>

El atributo  title  contiene el texto que se muestra en forma de "tip" (cuadrito amarillo que aparece cuando se sitúa el ratón encima de la imagen). El atributo  title  es optativo.
Los ejemplos siguientes muestran cómo el texto del atributo  title  se muestra siempre, independientemente de que la imagen se encuentre o no disponible.

>![Alt Text](https://i.ibb.co/rvk1Bb6/15.png)

### Links (Enlace)

Los enlaces de hipertexto (o hiperenlaces) son el elemento característico de la web porque permiten que las páginas se relacionen entre sí. La sencillez y libertad con que se pueden enlazar páginas situadas en servidores distintos son el motivo del éxito de la web.

Un enlace de hipertexto tiene dos partes:

-   el enlace, es decir, el elemento (texto o imagen) sobre el que se puede hacer clic con el ratón,
-   el destino, es decir, el elemento (página web, imagen, archivo, etc) que se muestra al hacer clic en el enlace

Un enlace sólo puede llevar a un destino, pero enlaces diferentes pueden llevar al mismo destino.

En el código fuente HTML los enlaces se identifican mediante la etiqueta  &lt;a>  y su atributo  href, que contiene el URI del destino al que conduce el enlace. Los URI del destino pueden ser absolutos (http://www....) o relativos.

Los enlaces de texto se muestran en los navegadores de color azul y subrayados.

>![Alt Text](https://i.ibb.co/hs2tkgD/11.png)
