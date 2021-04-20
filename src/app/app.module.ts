import { ArtigoPastItemComponent } from './components/artigo-past-item/artigo-past-item.component';

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
import { ArtigoCardComponent } from './components/artigo-card/artigo-card.component';
import { SponsorItemComponent } from './components/sponsor-item/sponsor-item.component';
import { EventoCardComponent } from './components/evento-card/evento-card.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ComunidadeItemComponent } from './components/comunidade-item/comunidade-item.component';
import { MemberItemComponent } from './components/member-item/member-item.component';
import { EventoDetalheComponent } from './components/evento-detalhe/evento-detalhe.component';
import { ArtigoDetalheComponent } from './components/artigo-detalhe/artigo-detalhe.component';
import { PreleitorEventoCardComponent } from './components/preleitor-evento-card/preleitor-evento-card.component';
import { ComentarioItemComponent } from './components/comentario-item/comentario-item.component';

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
    CommentPeopleFeedComponent,
    ArtigoCardComponent,
    SponsorItemComponent,
    EventoCardComponent,
    ArtigoPastItemComponent,
    ComunidadeItemComponent,
    MemberItemComponent,
    EventoDetalheComponent,
    ArtigoDetalheComponent,
    PreleitorEventoCardComponent,
    ComentarioItemComponent
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
    MatNativeDateModule,
    MatListModule,
    FontAwesomeModule,
    HttpClientModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
