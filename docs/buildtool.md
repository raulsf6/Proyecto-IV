# Build Tool

La herramienta utilzada para el despliegue es [package.json](https://github.com/raulsf6/Proyecto-IV/blob/master/package.json). Se ha utilizado esta opción ya que la implementación con pm2 me parece mejor llevada que con grunt o gulp, que pueden ser delegados para tareas de precompilación u ofuscación de código, no siendo este nuestro caso.

[package.json](https://github.com/raulsf6/Proyecto-IV/blob/master/package.json) cuenta con todas las dependencias en su interior así como todos los scripts de construcción, test y coverage.

Los scripts con los que cuenta son:

* `npm run start-dev`: Inicia un servidor con un nodemon que recarga el proyecto automáticamente cada vez que hay un cambio en alguno de los archivos .js o .yml

* `npm start`: Inicia el proyecto con ñla herramienta pm2. Por defecto la iniciará con solo una instancia. Sin embargo, puede recibir el parámetro `-- -i <numero de instancias>` para añadir instancias.



    `npm start -- -i 4` Iniciará el servicio con 4 instancias del mismo.

* `npm stop`: Detendrá el servicio pero no lo borrará de memoria, por lo que será menos costoso volver a lanzarlo con `npm start`


* `npm delete`: Eliminará el servicio de memoria junto con todas sus estancias. Volver a cargarlo a memoria será mucho mas costoso.Eliminará el servicio de memoria junto con todas sus estancias. Volver a cargarlo a memoria será mucho mas costoso.

Cabe destacar que si se va a desplegar en un entorno de produccion es **indispensable** establecer la variable de entorno NODE_ENV como _production_ ya que mejorará considerablemente el rendimiento.

`export NODE_ENV=production`

