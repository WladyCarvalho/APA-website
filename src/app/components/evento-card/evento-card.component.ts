import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.scss']
})
export class EventoCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['detalhe-evento'])
  }

}
