import { EventoService } from './../services/evento.service';
import { mEvento } from 'src/app/models/mEvento';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

 

  //Eventos cadastrados
  eventos:mEvento[]=[];
  private unsubscribe$ = new Subject<void>();
  datepipe: DatePipe = new DatePipe("en-US");
  evento_h:mEvento = new mEvento();

  evento_h_date!:any;

  constructor( private router:Router, private event_service:EventoService) { }

  ngOnInit(): void {
    this.evento_h.descricao="er"
    this.getAllevents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
