import { Social } from "./social";

export class mPreleitor{
    nome!:string;
    tema!:string;
    designacao!:string;
    socials:Social[]=[];
    createDate:any;
    filePath_event!: string;
    preleitorId!:string|undefined;
    photo_url!:string;
    photo_name!:string;
}