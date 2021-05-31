import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { mEvento } from 'src/app/models/mEvento';
import { EventoService } from './../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tile } from '@angular/material/grid-list/tile-coordinator';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  eventId!:string|null;
  eventData:mEvento|undefined = new mEvento();
  

  private unsubscribe$ = new Subject<void>();

  

  constructor(
    private route:ActivatedRoute,
    private event_service:EventoService
  ) {
      if(this.route.snapshot.params['eventoId']){
        this.eventId = this.route.snapshot.paramMap.get('eventoId');
      }
   }

   ngOnDestroy() {
     this.unsubscribe$.next();
     this.unsubscribe$.complete();
   }

  ngOnInit(): void {
    this.eventData!.descricao="er";
      this.event_service.getEventById(this.eventId!)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result:mEvento|undefined)=>{
          this.eventData = result;
        }
      )
  }

}
