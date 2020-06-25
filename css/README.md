# CSS

  

## inline css

```html

<h1 style="color: green">Este texto va aparecer verde</h1>

```

## selector de tag
```css
/* Indicamos que la etiqueta h1 tendrá un color de letra blanco */
h1 { 
	color: white;
	/* Tambien podemos usar colores rgb o hexadecimales */
	color: rgb(256,256,256);
	color: #FFFFF;
}
```

## selector de clase
El selector de clase hace uso de la propiedad `class` dentro de las tag de html, de esta manera tu puedes reutilizar tus `clases` o `estilos` de css en varios componentes.
```css
.titulo {
	background-color: red;
}
```

```html
<h1 class="titulo">mi titulo</h1>
<h1>Este titulo no tiene el fondo rojo</h1>
```
  

## selector de id

```css
#titulo {
	font-size: 32px;
}
#subtitulo {
	font-size: 24px;
}
```
```html
<h1 id="titulo">Titulo</h1>
<h2 id="subtitulo">subtitulo</h2>
```

# propiedades comunes

  

## color

  

## font-size

  

## background

  

## width y height

  

## boxmodel margin y padding

  

## border y border radius