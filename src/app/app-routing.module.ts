import { ArtigoDetalheComponent } from './components/artigo-detalhe/artigo-detalhe.component';
import { EventoDetalheComponent } from './components/evento-detalhe/evento-detalhe.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { ComunidadeComponent } from './components/comunidade/comunidade.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { EventoComponent } from './components/evento/evento.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'eventos',component:EventoComponent},
  {path: 'artigos',component:ArtigoComponent},
  {path: 'sobre',component:SobreComponent},
  {path: 'contacto',component:ContactoComponent},
  {path: 'comunidades',component:ComunidadeComponent},
  {path: 'doacao',component:DoacaoComponent},
  {path: 'detalhe-evento',component:EventoDetalheComponent},
  {path: 'detalhe-artigo',component:ArtigoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
