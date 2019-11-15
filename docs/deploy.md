# Despliegue

## Heroku

En primer lugar, hay que instalar el CLI de Heroku. En Ubuntu, por ejemplo:

```
snap install --classic heroku
```

Para otras distribuciones o SO se puede consultar [aquí](https://devcenter.heroku.com/articles/heroku-cli). Por otra parte, también necesitaremos una cuenta de Heroku.

Una vez instalado, tendremos que crear una instancia del PaaS. Para ello basta con ejecutar el [script de despliegue](https://github.com/raulsf6/Proyecto-IV/blob/master/heroku-deploy.sh) con el nombre que le queremos dar a la aplicación como parámetro.

```
heroku-deploy.sh <nombre de aplicación>
```

Si todo ocurre sin problemas, se debería crear una instancia del PaaS con la aplicación desplegada. El script de inicio será el reflejado en el [Procfile](https://github.com/raulsf6/Proyecto-IV/blob/master/Procfile)

Por último, para automatizar el despliegue cada vez que se hace un push al repositorio de Github, tendremos que configurar nuestro recurso en el dashboard de Heroku como se indica [aquí](https://devcenter.heroku.com/articles/github-integration), activando la integración de Github y los despliegues automáticos.