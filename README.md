# Proyecto-IV
![test status](https://travis-ci.org/raulsf6/Proyecto-IV.svg?branch=master)

Proyecto para la asignatura de IV en la UGR, curso 19/20

## Idea Principal
El principal objetivo es ser capaz de gestionar los productos de un supermercado de forma que se puedan consultar, crear, eliminar y actualizar productos. Cada uno dispondrá de la siguiente información:

- Código de barras

- Información nutricional:
    - Energía por 100 gramos (kcal)
    - Grasas por 100 gramos (g)
    - Hidratos de carbono por 100 gramos (g)
    - Proteínas por 100 gramos (g)

- Marca

- Alérgenos


## Cómo se implementará

* Se usará una aquitectura de microservicios.
* La interacción con los microservicios se realizará mediante una API RESTful.
* Para el almacenanmiento de los productos se usará una base de datos, con la que el microservicio interactuará para consultar, crear, eliminar o actualizar productos.
* Se usará un servicio de log.

## Herramientas a utilizar

* Como **lenguaje** se usará Javascript, en concreto, [Node.JS](https://nodejs.org/en/) en su versión 10.16.3 LTS.
* Para la implementación de la **API RESTful** se usará el paquete [Express](https://www.npmjs.com/package/express) de NodeJs.
* Para la base de datos se usará [MongoDB](https://www.mongodb.com/es).
* El **ORM** para la interacción con la base de datos será [Mongoose](https://www.npmjs.com/package/mongoose).
* Para el servicio de **log** se usará la biblioteca [Morgan](https://www.npmjs.com/package/morgan).
* Los **tests** se realizarán usando el paquete [Mocha](https://www.npmjs.com/package/mocha).
* Para **integración continua** se usará [Travis](https://travis-ci.org/).