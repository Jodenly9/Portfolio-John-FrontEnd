"use strict";
var n = "Juan";
var a = "Lopez";
var ndom = document.getElementByid("fname");
var adom = document.getElementByid("lname");
ndom.value = n;
adom.value = a;
class fichaPersona {
    //constructor
    constructor(n, a) {
        this._n = n;
        this._a = a;
    }
    //getters y setters
    get n() { return this._n; }
    get a() { return this._a; }
    set n() { }
}
var Persona = new fichaPersona("Taren", "Gant<");
persona.competaFicha();
