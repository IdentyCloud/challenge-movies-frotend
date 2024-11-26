# MovieChallenge Frontend

## Nombre completo

Ezequiel Antonio Nuñez

## Respuestas de las preguntas

#### Pregunta: Como has visto, la llamada que has implementado para obtener las películas que están en cartelera puede recibir un parámetro “page”. No es objeto de esta prueba implementar paginación, pero si tuvieses que hacerlo, ¿puedes explicar cómo lo harías en la aplicación y en el backend?

Respuesta: En primera instacia agregaria un parametro `limit` adicional al parámetro `page` que ya tenemos implementado, de esta manera se puede controlar cuántos resultados se devuelven por página, luego agregaria los adicionales como `currentPage`, `totalPages` y `totalResults`, que serían utilizados para paginar.

#### Pregunta:Si tuvieses que manejar un Array con 7 millones de películas, y necesitas eliminar aquellas en las que el atributo vote_average no supera el valor 6, ¿cómo lo harías? Justifica tu respuesta teniendo en cuenta el rendimiento

Respuesta: Se podria utilizar filter pero desde mi experiencia lo ideal seria que backend haga los ajustes necesarios para recibir la informacion por parametros para retornar solo los elementos necesarios, por otra parte garantizamos mantener la informacion de url ante un refresco de navegación o compartir links mediante email, etc.

## Librerías adicionales
- **Tailwind CSS**: Framework de CSS para mejorar el diseños responsivo y facilitar el desarrollo a nivel frontal.

## Documentación a aportar
- **JSON**: Colección de Postman que incluye todas las rutas de la API y ejemplos de solicitudes para interactuar con la base de datos de películas, el nombre del archivo es: Challenge Movies.postman_collection.json

## Consideraciones a tener en cuenta:
Por motivos personales y de conectividad, no he podido completar los siguientes puntos:
- Agregar un swiper para armar un carrousel.
- Mejorar el diseño a nivel de frontend.
- Agregar Formularios reactivos para tener validaciones y reset de formularios con mayor performance.
- Agregar un toast o notificaciones cuando finaliza el proceso de registro.

Pido disculpas por estos faltantes, pero la verdad es que fue un challenge medio atípico para mí.