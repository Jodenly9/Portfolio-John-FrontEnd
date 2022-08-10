import{fichaPersona} from "./fichaPersona";
export class fichaPersonaMenor extends fichaPersona{
    private _nr:string;
    private _ar:string;

    constructor(n:string,a:string,nr:string,ar:string){
        super(n,a),
        this._ar = ar;
        this._nr = nr;

    }
    ()
}