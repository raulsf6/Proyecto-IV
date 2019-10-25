# Integración continua

## Travis

Para implementar la integración continua con Travis se usa el fichero de configuración [.travis.yml](https://github.com/raulsf6/Proyecto-IV/blob/master/.travis.yml). La versiones de NodeJS con las que se testea son 10.16.3, latest LTS y lastest stable.

La instalación de las dependencias en Travis se realiza usando npm ci, en lugar de npm install, porque acelera el proceso de instalación.

Para testear se ejecuta el script npm test que todos los ficheros de tests bajo el directorio test/.

Para reportar el coverage se ejecuta el script npm run cover que genera un reporte del coverage con nyc y lo envía a [coveralls](https://coveralls.io/), de donde se extrae el badge de coverage.

## CircleCI

Para implementar la integración continua con CircleCI se usa el fichero de configuración [config.yml](https://github.com/raulsf6/Proyecto-IV/blob/master/.circleci/config.yml) bajo el directorio .circleci. Se usan las versiones 10.16.3, latest LTS y lastest stable de Node sobre una imagen de docker por defecto de CircleCI

La instalación de dependencias también se realiza usando npm ci para acelerar el proceso.

Para testear se utiliza npm test, que ejecuta mocha sobre todos los archivos de test bajo el directorio test/.

En este sistema de CI no se consulta el coverage debido a que es redundante enviar la misma información dos veces a Coveralls. Además, el coverage obtenido de CircleCI "pisaría" el obtenido en Travis
