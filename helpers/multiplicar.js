const fs= require("fs");
const { Module } = require("module");
var colors = require('colors');
const crearArchivo = async (numero =" " ,list= false,hasta = " ") => {
    try {
        let salida = "";
        for (let i = 1; i <= hasta; i++){
            salida +=`${numero} x ${i}=${numero*i}
            `;
        } 
        if(list){    
        console.clear();
        console.log("=======")
        console.log (`tabla de ${numero}`)
        console.log ("=======") 
        fs.writeFileSync(`./salida/tabla-${numero}.txt`,salida,(err)=>{
        if(err) throw err;
        })
        console.log(salida.rainbow) 
    }
        return `se creo la tabla ${numero}.txt `
    } 
    catch (err) {
        throw err;
        
    }
  
}



module.exports = {crearArchivo:crearArchivo}
