#!/bin/bash

# Script de despliegue
# $1: Nombre de la aplicación como primer parámetro

heroku login
heroku create $1
git push heroku master