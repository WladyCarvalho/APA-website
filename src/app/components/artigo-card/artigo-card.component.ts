import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigo-card',
  templateUrl: './artigo-card.component.html',
  styleUrls: ['./artigo-card.component.scss']
})
export class ArtigoCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['detalhe-artigo'])
  }

}
