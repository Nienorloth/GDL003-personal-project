# Titulo
Cuaderno de colecta Android app.

## Preámbulo
Se creará una aplicación nativa para android, con la funcionalidad de la aplicación web "Cuaderno de colecta" creada anteriormente con react en el proyecto "Lab notes".

## Introducción
Para este proyecto se adaptarán el proyecto de "Cuaderno de colecta" de react a react native, para que se pueda utilizar como una app nativa de android.

El proyecto de desarrollo web cuenta con la funcionalidad de crear notas con campos predefinidos para almacenar la información taxonómica de colectas de campo. Estas notas se pueden almacenar en 3 cuadernos pre existentes según el tipo de especimenes colectados. También se pueden editar, eliminar y agregar una imagen. Durante este proyecto se mejorará la experiencia de usuario con la funcionalidad ya existente y se agregarán nuevas características, como georreferenciación para capturar las coordenadas del sitio de colecta y la posibilidad de crear cuadernos de colecta.

## Objetivos de aprendizaje
El objetivo principal es aprender a utilizar react native, adaptando un proyecto que desde un principio estuvo pensado para usarse en dispositivos móviles.

Otro objetivo de aprendizaje es el seguir interactuando con firebase para aprender más sobre cómo utilizar el backend.

## Avances esperados
Para este proyecto se pretende mejorar la funcionalidad para agregar imágenes para que se pueda tomar una fotografía con la cámara del celular y subirla al instante, así como mejorar la experiencia de usuario al mostrar las fotografías y la información almacenada.

Además de estas mejoras, se implementarán características nuevas:
-Georreferenciación (API de google maps).
-Se implementará la funcionalidad de crear cuadernos nuevos en los que el usuario pueda definir título, portada y campos de información.

## Consideraciones Generales
-React native cuenta con un objeto de geolocalización para obtener las coordenadas del sitio de colecta.

-Para crear nuevos cuadernos con las especificaciones requeridas por el usuario, se tendrán que crear nuevas colecciones en la base de datos de firebase, con los campos definidos por el usuario.

-Para crear la interfaz se deberá adaptar la estructura html a view, que utiliza flexbox para maquetar y soporta funciones touch.

-Se puede probar la aplicación por medio de la app de expo directamente en dispositivos móviles, sin embargo el desempeño en ese entorno no es igual que el de una aplicación nativa, por lo cual se utilizará en emulador de android studio.

## Hacker Edition
Una vez logrados los avances esperados, se implementará la visualización de un mapa con los sitios de colecta marcados, con la opción de filtrar los sitios de colecta de cada cuaderno.

## Uso
Para poder correr la aplicación, el usuario deberá descargarla de una app store e instalarla.