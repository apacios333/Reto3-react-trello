# Réplica de Trello
RETO 3. Réplica de Trello - 2020-06-BTC Fronted (Formación GeeksHubs)
Sistema de gestión de tareas similar a Trello realizado con [React](https://es.reactjs.org/) - Hooks.

#### Tabla de Contenidos
- [Introducción](#Introducción)
- [Contenido](#Contenido)
- [Pre-requisitos](#Pre-requisitos)
- [Instrucciones de Configuración](#Instrucciones-de-Configuración)
- [Instrucciones de Instalación](#Instrucciones-de-Instalación)
- [Uso](#Uso)
- [Herramientas utilizadas](#Herramientas-utilizadas)
- [Autor](#Autor)

## Introducción

Se ha recreado una aplicación de una sola página de un sistema de gestión de tareas propio similar al conocido [Trello](https://trello.com/es), realizado con [Create-React-App](https://github.com/facebook/create-react-app).

El diseño se ha elaborado en hojas de estilo Sass con FlexBox.

La funcionalidad y lógica de la web se implementan en javascript con [React](https://es.reactjs.org/), usando Hooks, y la gestión del estado con [Redux](https://es.redux.js.org/).

## Contenido 
Este proyecto tiene una rama: **Reto3** que incluye:
-  Package.json, index.js, App.js,  y su hoja de estilo App.scss. Además color.scss con los estilos de colores usados en la aplicación. 
- Las carpetas base con Header, Body y Footer, incluye las funciones .jsx y sus hojas de estilo sass correspondientes. 
- La carpeta components con los componentes que se renderizan, incluye las funciones .jsx y sus hojas de estilo sass correspondientes.
- La carpeta Reduxapp para la gestión del estado: reducer.js, action.js, store.js

## Pre-requisitos 
Se necesita para empezar a trabajar con la aplicación:

* Un editor de código (ejemplo [Virtual Studio Code](https://code.visualstudio.com/))
* Un gestor de paquetes (ejemplo [Node.js](https://nodejs.org/es/))
* Instalar [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
* Instalar [react-redux](https://es.redux.js.org/), y [redux](https://es.redux.js.org/)
* Instalar [Node-Sass](https://github.com/sass/node-sass)
* Instalar [uuid](https://www.npmjs.com/package/uuid)

## Instrucciones de Configuración

Desde [Virtual Studio Code](https://code.visualstudio.com/) se instalan los paquetes [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd), [react-redux](https://es.redux.js.org/), [redux](https://es.redux.js.org/) , [Node-Sass](https://github.com/sass/node-sass) y [uuid](https://www.npmjs.com/package/uuid) con [Node.js](https://nodejs.org/es/):

* $ npm install react-beautiful-dnd --save

    ($ yarn add react-beautiful-dnd)

* $ npm install react-redux redux

    ($ yarn add react-redux redux)

* $ npm install node-sass

    ($ yarn add node-sass-install)

* $ npm install uuid

    ($ yarn add uuid)

A continuación se instala y ejecuta la aplicación.

## Instrucciones de Instalación
Instalar usando npm (o yarn):

### `$ npm install --save react-trello`

($ yarn add react-trello)

## Uso 

Tras la instalación, en el directorio del proyecto, se ejecuta la aplicación en modo desarrollo usando npm (o yarn):

### `npm start`

(yarn start)

Se abre un servidor local, [http://localhost:3000](http://localhost:3000), para verlo en el navegador (La página se volverá a cargar si se realizan modificaciones).

En la aplicación, se crean listas (denominadas en el proyecto como cards) añadiendo un nombre a cada una. Internamente a las mismas se crean tareas añadiendo el contenido (denominadas en el proyecto como items).
Estos cards e items pueden ser creados, eliminados, o editados (para cambiar el texto que se muestra). Y, al igual que en Trello, pueden ser organizados como el usuario valore (DRAG and DROP de los componentes): Las cards se orden de manera horizontal, y los items se ordenan dentro de una misma card verticalmente, o entre cards.

Se recibe un estado de datos que se gestiona con Redux. Se muestra a continuación un ejemplo de la estructura de los datos:

```javascript
const ExampleState ={

    cards: {
       'card1': {
            id:'card1',
            title: 'title1',
            items: [{id: 'item1', content: 'item1content'}], 
        },
        'card2': {
            id:'card2',
            title: 'title2',
            items: [{id: 'item2', content: 'item2content'}], 
        },
    },
    
    cardIds: ['card1', 'card2'],
};
```
El estado se inicializa en reducer.js como vacío, y se actualizará en la medida que el usuario inserte o modifique cards e items.

## Herramientas utilizadas
* [REACT](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Biblioteca dentro de React construida específicamente para listas, que permite implementar las funcionalidades de arrastrar y soltar elementos.
* [Redux](https://es.redux.js.org/) - Biblioteca para el manejo del estado global de la aplicación.
* [Sass](https://sass-lang.com/) - Hojas de estilo para los componentes. [Node-Sass](https://github.com/sass/node-sass) compila Sass a CSS.
* [Layout Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Modelo de Layout Caja Flexible: Mejorar alineación de elementos y distribuir el espacio.
* [uuid](https://www.npmjs.com/package/uuid) - Paquete para crear identificadores únicos.
* [JavaScript-ES6](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación
* [GIT](https://git-scm.com/) - Método de control de versiones de código

## Autor
* **Alicia Pacios Martínez** - *Trabajo Inicial* - [apacios333](https://github.com/apacios333)