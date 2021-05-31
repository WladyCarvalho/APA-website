import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { mEvento } from 'src/app/models/mEvento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private db: AngularFirestore) { }
  
  getEventById(eventoId:string){
    const eventoDetails = this.db.doc<mEvento>('eventos/'+eventoId).valueChanges();
    return  eventoDetails;
  }

  actualizarEvento(eventoId:string,evento:mEvento){
    const putData = JSON.parse(JSON.stringify(evento));
    return this.db.doc('eventos/'+eventoId).update(putData);
  }

  eliminarEvento(eventoId:string){
    return this.db.doc('eventos/'+eventoId).delete();
  }

  listarEventos(): Observable<mEvento[]>{
    const eventos = this.db.collection<mEvento>('eventos',ref=> 
    ref.orderBy('createDate','desc'))
      .snapshotChanges().pipe(
        map(actions => {
          return actions.map(
            c => ({
              eventoId:c.payload.doc.id,
              ...c.payload.doc.data()
            }));
        }));
    return eventos;
  }
}
