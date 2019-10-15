# NutritionAPI
[![Build Status](https://travis-ci.org/raulsf6/Proyecto-IV.svg?branch=master)](https://travis-ci.org/raulsf6/Proyecto-IV) [![CircleCI](https://circleci.com/gh/raulsf6/Proyecto-IV.svg?style=svg)](https://circleci.com/gh/raulsf6/Proyecto-IV)
[![Coverage Status](https://coveralls.io/repos/github/raulsf6/Proyecto-IV/badge.svg?branch=master)](https://coveralls.io/github/raulsf6/Proyecto-IV?branch=master) [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Idea Principal

El principal objetivo es ser capaz de gestionar los productos de un supermercado de forma que se puedan consultar, crear, eliminar y actualizar productos. Permitiendo acceder a la información nutricional en cualquier momento. 

Cada producto registrado dispondrá de la siguiente información:

- Código de barras

- Información nutricional:
    - Energía por 100 gramos (kcal)
    - Grasas por 100 gramos (g)
    - Hidratos de carbono por 100 gramos (g)
    - Proteínas por 100 gramos (g)

- Marca

- Alérgenos

## Instalación

`npm install`

## Test

`npm test`

Se testearán todos los ficheros incluidos bajo el directorio /test/ usando Mocha.

## Cómo se implementará

* Se usará una aquitectura de microservicios.
* La interacción con los microservicios se realizará mediante una API RESTful.
* Para el almacenanmiento de los productos se usará una base de datos, con la que el microservicio interactuará para consultar, crear, eliminar o actualizar productos.
* La interacción entre la base de datos y el gateway lo realizará la clase pricipal: [ProductService](https://github.com/raulsf6/Proyecto-IV/blob/master/src/services/ProductService.js), que contará con los métodos necesarios para realizar las principales funciones del microservicio.
* Se usará un servicio de log.

## Herramientas utilizadas

* Como **lenguaje** se usará Javascript, en concreto, [Node.JS](https://nodejs.org/en/) en su versión 10.16.3 LTS, debido a su compatibilidad con ES6.
* Para la implementación de la **API RESTful** se usará el paquete [Express](https://www.npmjs.com/package/express) de NodeJs.
* Para la base de datos se usará [MongoDB](https://www.mongodb.com/es).
* El **ORM** para la interacción con la base de datos será [Mongoose](https://www.npmjs.com/package/mongoose).
* Para el servicio de **log** se usará la biblioteca [Morgan](https://www.npmjs.com/package/morgan).
* Los **tests** se realizarán usando el paquete [Mocha](https://www.npmjs.com/package/mocha).
* Para **integración continua** se usará [Travis](https://travis-ci.org/).

## Documentación

### Integración continua

Se puede consultar la documentación sobre la integración continua [aqui](https://github.com/raulsf6/Proyecto-IV/blob/master/docs/CI.md)