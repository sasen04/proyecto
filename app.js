var colors = require('colors');
const { crearArchivo} = require("./helpers/multiplicar");
const argv= require("./config/yars");

 crearArchivo(argv.b,argv.l,argv.h)
.then(nombrearchivo=> console.log(nombrearchivo,"creado".red) )
.catch (err => console.log(err)); 

