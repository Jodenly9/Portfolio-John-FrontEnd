var n:string= "Juan";
var a:string= "Lopez";

var ndom:any = document.getElementByid("fname")
var adom:any = document.getElementByid("lname")

ndom.value= n;
adom.value= a;

class fichaPersona{
    //Propiedades
    protected _n:string;
    protected _a:string;
    
    //constructor
    constructor(n:string, a:string){
        this._n =n;
        this._a =a;
    }
    //getters y setters
    public get n():string{return this._n}
    public get a():string{return this._a}
    public set n()

    //metodos
}
var Persona= new fichaPersona("Taren","Gant<");

persona.competaFicha();