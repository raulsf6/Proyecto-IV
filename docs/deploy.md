# Despliegue

## Heroku

En primer lugar, hay que instalar el CLI de Heroku. En Ubuntu, por ejemplo:

`snap install --classic heroku`

Para otras distribuciones o SO se puede consultar [aquí](https://devcenter.heroku.com/articles/heroku-cli). Por otra parte, también necesitaremos una cuenta de Heroku.

Por otro lado, debemos de crear el Procfile. Es un fichero de texto plano que describe el tipo de proceso que queremos desplegar y cómo lo queremos desplegar, con el formato:

`<tipo de proceso>: <comando de despliegue>`

 En nuestro caso, queremos que sea un servicio web, por lo que dentro del Procfile incluiremos:

`web: npm run start-heroku`

Siendo npm run start-heroku la orden de despliegue para Heroku, que se puede consultar en [package.json](https://github.com/raulsf6/Proyecto-IV/blob/master/package.json). Simplemente ejecuta `node ./src/bin/www` ya que Heroku balancea la carga y controla el proceso por defecto.

Una vez definido el [Procfile](https://github.com/raulsf6/Proyecto-IV/blob/master/Procfile), tendremos que crear una instancia del PaaS. Para ello ejecutaremos:

`heroku login`: Nos abre el navegador predeterminado para hacer login en el dashboard Heroku.

`heroku create nutritionapi`: Crea una instancia predeterminada con el nombre de nutritionapi, que será parte del dominio para acceder a nuestra API.

`git push heroku master`: En el directorio raíz de nuestra aplicación. Subirá el código fuente de nuestra aplicación a la instancia del PaaS creada y desplegará usando la orden encontrada en el Procfile. Heroku es capaz de detectar automáticamente que queremos desplegar una aplicación de NodeJS, por lo que instalará todos los paquetes necesarios para producción de nuestro package.json, estableciendo automáticamente las variables de entorno de producción.

Estas tres ordenes están automatizadas en el [script de despliegue](https://github.com/raulsf6/Proyecto-IV/blob/master/heroku-deploy.sh), que recibe un parámetro con el nombre de PaaS que queremos utilizar.

Si todo ocurre sin problemas, se debería crear una instancia del PaaS con la aplicación desplegada en https://\<nombre de app\>.herokuapp.com/. En nuestro caso en https://nutritionapi.herokuapp.com.

Por último, para automatizar el despliegue cada vez que se hace un push al repositorio de Github, tendremos que configurar nuestro recurso en el dashboard de Heroku como se indica [aquí](https://devcenter.heroku.com/articles/github-integration), activando la integración de Github y los despliegues automáticos.