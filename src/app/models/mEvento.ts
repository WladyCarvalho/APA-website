import { mPreleitor } from "./mPreleitor";

export class mEvento{
    
    tema!:string;
    descricao!:string;
    data:any;
    modalidade!:string;
    localidade!:string;
    preleitores!:mPreleitor[];
    eventoId!:string|undefined;

}