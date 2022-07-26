const fs = require("fs");
const path = require("path");

let carritoMiddleware = (req, res, next) => {
//transforma la cookie en un array

    //voy a crear una cookie para el carrito
    //permite un carrito por cliente (no necesita loguearse)
    //el carrito va a contener los id de productos separados por una barra /
    let stringCarrito
    let arrayCarrito
    console.log ("la cookieMW esta asi " + req.cookies.carrito)
    console.log ("session en MW esta asi "+ req.session.carrito)
    //veo si ya tiene una cookie creada o vacia
    if (req.cookies.carrito == undefined) {
        //creo la cookie
        res.cookie("carrito", "", { maxAge: 1000 /*milisegundos = 1 seg*/ * 60 /*1 min*/ * 60 /*1 hora*/ * 24  /*1 dia*/ * 365 * 10, /*10 anios de duracion */ })
        req.session.carrito = []
        console.log("paso 1")
        next()
    } else {
        if (req.cookies.carrito == "") {
            req.session.carrito = []
            console.log("paso 2")
            next()
        } else {
            //si ya esta creada la cookie, voy a transformar al codigo en un array
            stringCarrito = req.cookies.carrito
            console.log (req.cookies.carrito)
            arrayCarrito = stringCarrito.split("/")
            console.log (req.cookies.carrito)
            //guardo el carrito en session
                 req.session.carrito = arrayCarrito;
                 console.log (req.session.carrito)
                 console.log("paso 3")
            next()
        }
    }
}
module.exports = carritoMiddleware;