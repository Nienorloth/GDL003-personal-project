# Titulo
Cuaderno de colecta

## Preámbulo
Se creará una aplicación para dispositivos móviles, con la funcionalidad de la aplicación web "Cuaderno de colecta" creada anteriormente con react en el proyecto "Lab notes".

## Introducción

- Se adaptará el proyecto "Cuaderno de colecta" de react a react native, para que se pueda utilizar como una app móvil.

- El proyecto de desarrollo web ya cuenta con la funcionalidad de crear notas con campos predefinidos para almacenar la información taxonómica de colectas de campo. Estas notas se pueden almacenar en 3 cuadernos pre existentes según el tipo de especimenes colectados. También se pueden editar, eliminar y agregar una imagen.

- Durante este proyecto se agregarán nuevas características, como georreferenciación para capturar las coordenadas del sitio de colecta y la posibilidad de crear cuadernos de colecta.

## Objetivos de aprendizaje

- Aprender a utilizar react native, así como sus apis.

- Conocer el framework de react native.

- Aprender funciones más avanzadas de firebase.

## Avances esperados

- El usuario podrá tomar fotografías para subirlas al instante a la app, almacenándolas en firebase.

- Se podrán obtener las coordenadas de los sitios de colecta por medio de geolocalización.

- El usuario podrá crear cuadernos nuevos.

## Consideraciones Generales

- React native cuenta con un api de geolocalización para obtener las coordenadas del sitio de colecta.

- Para crear nuevos cuadernos con las especificaciones requeridas por el usuario, se tendrán que crear nuevas colecciones en la base de datos de firebase, con los campos definidos por el usuario.

- Se creará una interfaz para dispositivos móviles.

- Se puede probar la aplicación por medio de la app de expo directamente en dispositivos móviles, sin embargo el desempeño en ese entorno no es igual que el de una aplicación nativa, por lo cual se utilizará en emulador de android studio.

## Hacker Edition
Una vez logrados los avances esperados, se implementará la visualización de un mapa con los sitios de colecta marcados, con la opción de filtrar los sitios de colecta de cada cuaderno.

## Uso
Para poder colaborar con el proyecto se debe hacer clon del respositorio y hacer npm install para instalar las dependencias del proyecto.