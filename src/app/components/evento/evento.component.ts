import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { mEvento } from 'src/app/models/mEvento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  //Eventos cadastrados
  eventos:mEvento[]=[];
  private unsubscribe$ = new Subject<void>();
  datepipe: DatePipe = new DatePipe("en-US");
  evento_h:mEvento = new mEvento();
  

  evento_h_date!:any;
  constructor(private router:Router,private event_service:EventoService) { }

  ngOnInit(): void {
    this.evento_h.descricao="";
    this.getAllevents();
  }

  navegar(){
    this.router.navigate(['detalhe-evento'])
  }

  getAllevents(){
    this.event_service.listarEventos().pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      result => {
       this.eventos = result;
       this.evento_h = result[0];
        }
    );
  }
}
