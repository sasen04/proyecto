var colors = require('colors');
const { describe } = require('yargs');
const argv = require('yargs')
                        .option("b",{
                            alias: "base",
                            type: "number",
                            demandOption:true,
                            describe: "el numero para la tabla"
                        })
                        .option("l",{
                            alias: "list",
                            type: "boolean",
                            default: false,
                            describe: "si mostrarla o no"

                        })
                        .option("h",{
                            alias: "hasta",
                            type: "number",
                            default: 10,
                            describe: "hasta que numero"
                        })

                       .check( (argv, Option) => {
                            console.log("yargs",argv)
                            if(isNaN( argv.b) ){
                                throw"la base tiene que ser un numero"
                            }
                            return true
                        }) 
                        
                        .argv;
module.exports = argv;    