# Virtualización

## Vagrant

La herramienta utilizada para virtualizar es Vagrant por su sencillez de uso y su exttensa documentación. La imagen a utilizar es Ubuntu 18.04 Cloud Image que es una versión más ligera de Ubuntu optimizada para proveedores en la nube. El nombre de la box de Vagrant es `ubuntu/bionic64`.

Por supuesto, necesitamos instalar Vagrant en nuestro sistema para levantar la máquina. Además, usamos VirtualBox como provider, por lo que también necesitaremos instalarlo.

Para configurar nuestro máquina necesitamos un [Vagrantfile](), que en nuestro caso luce así:

```
Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/bionic64"
  config.vm.box_check_update = true

  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"

  config.vm.provider "virtualbox" do |vm|
    vm.memory = 2048
    vm.cpus = 2
  end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "./provision/playbook.yml"
  end

end
```

En la primera línea se especifica la versión de Vagrant que queremos usar para la configuración, en nuestro caso es la 2. Después procedemos a seleccionar la box base que vamos a usar, que es la anterior mencionada `ubuntu/bionic64`. Dándole el valor `true `a `config.vm.box_check_update` estamos indicando que queremos que se comprueben actualizaciones de la box base cada vez que levantemos la máquna.

La siguiente línea corresponde a la configuración de los puertos, que en nuestro caso redireccionará el puerto 3000 del guest (donde corre la aplicación) al 3000 del host. 

EL siguiente bloque corresponde a la configuración del provider, en nuestro caso VirtualBox, en el que indicamos que usaremos 2 GB de RAM y 2 CPUs.

Finalmente tenemos el bloque de provisionamiento. En este bloque indicamos que vamos a usar Ansible como herramienta de aprovisionamiento y la localización del playbook del mismo. Para más información sobre aprovisionamiento puedes consultar [aquí]().

Para levantar la máquina solo tendremos que ejecutar:

`npm run start-virt`

Si todo se ejecuta correctamente, se creará un directorio .vagrant que contendrá la imagen.

Para parar la máquina ejecutaremos:

`npm run stop-virt`

Y para destruirla ejecutaremos:

`npm run rem-virt`
