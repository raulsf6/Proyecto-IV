
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
