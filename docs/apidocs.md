# Documentación de la API RESTFUL

Si se desea una visualización mas "user friendly" bastará con ejecutar el proyecto con

`npm start` o `npm run start-dev`

Y acceder a la ruta localhost:3000/api-docs . 3000 es el puerto por defecto de la aplicación. Si se ha establecido otro puerto exportando la variable de entorno PORT, se accederá mediante dicho puerto.

## Métodos

### GET /prods/{label}

Consulta el producto con la etiqueta label

* Devuelve 200 y el producto si todo OK
* Devuelve 404 si el producto no existe

### POST /prods

Crea un nuevo producto, se debe enviar en el body de la petición un objeto JSON con este [modelo](#Modelo)

* Devuelve 200 y el ibjeto creado si todo OK
* Devuelve 401 si el producto ya existe

### PUT /prods/{label}

Actualiza un producto con la etiqueta label, se debe enviar en el body de la petición un objeto JSON con este [modelo](#Modelo)

* Devuelve 200 y el producto si todo OK
* Devuelve 404 si el producto no existe


### DELETE /prods/{label}

Elimina un producto con la etiqueta label

* Devuelve 200 y el producto si todo OK
* Devuelve 404 si el producto no existe

## Modelo
```
 {
  "label": "string",
  "name": "string",
  "nutritional": {
    "energy": 0,
    "fat": 0,
    "carbohydrates": 0,
    "proteins": 0
  },
  "brand": "string",
  "allergens": [
    "string"
  ]
}
```

