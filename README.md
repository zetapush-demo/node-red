# node-red
ZetaPush integration to Node-red

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing Node-red

Check out http://nodered.org/docs/getting-started/ for full instructions on getting
started.

 `sudo npm install -g node-red`

More documentation can be found [here](http://nodered.org/docs).

## Deployment

1. Clone the code:

        git clone https://github.com/zetapush-demo/node-red.git
        cd node-red

2. Link each node module into a local node-red install, for example for config-node:

        in the directory containing the node’s package.json file ( cd config-node ), run: sudo npm link.
        in your node-red user directory, typically ~/.node-red run: npm link <name of node module> (this name 
        is in the package.json, in this case it is node-red-contrib-config-flow)

3. Starting node-red

        1. `node-red`
        2. Open <http://localhost:1880>
        Now you have access to the project's nodes module.

