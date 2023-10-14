import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FestaComponent } from './pages/festa/festa.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { ConfirmarPresencaComponent } from './pages/confirmar-presenca/confirmar-presenca.component';
import { Erro404Component } from './pages/erro404/erro404.component';
import { FotoCardComponent } from './components/foto-card/foto-card.component';
import { CarrosselFotosComponent } from './components/carrossel-fotos/carrossel-fotos.component';
import { RespondaPresencaComponent } from './components/responda-presenca/responda-presenca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FestaComponent,
    PresentesComponent,
    FotosComponent,
    DepoimentosComponent,
    ConfirmarPresencaComponent,
    Erro404Component,
    FotoCardComponent,
    CarrosselFotosComponent,
    RespondaPresencaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
