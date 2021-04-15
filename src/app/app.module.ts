
import { NgMaterialModule } from './ng-material/ng-material/ng-material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EventoComponent } from './components/evento/evento.component';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ComunidadeComponent } from './components/comunidade/comunidade.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CommentPeopleFeedComponent } from './components/comment-people-feed/comment-people-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    EventoComponent,
    ArtigoComponent,
    SobreComponent,
    ComunidadeComponent,
    ContactoComponent,
    DoacaoComponent,
    CommentPeopleFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
