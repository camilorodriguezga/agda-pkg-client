default : client

.PHONY : install-client
install-client :
	npm install npm@latest -g
	npm update
	npm install
	ng build

.PHONY : client
client:
	ng server --open