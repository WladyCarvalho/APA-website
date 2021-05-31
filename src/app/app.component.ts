import { Component, OnDestroy, OnInit } from '@angular/core';

import {MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'APA-website';
  deviceXs:boolean | undefined;
  
   //Responsividade
   mediaSub:Subscription | undefined ;

  constructor (public mediaObserver:MediaObserver) { }

  ngOnInit(): void {
   
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
             console.log(result.mqAlias);
        this.deviceXs = result.mqAlias ==='xs'?true:false;
    })
  }

  ngOnDestroy(): void {
    this.mediaSub?.unsubscribe();
}
}
