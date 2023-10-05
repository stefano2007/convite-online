import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestaComponent } from './components/festa/festa.component';
import { PresentesComponent } from './components/presentes/presentes.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { ConfirmarPresencaComponent } from './components/confirmar-presenca/confirmar-presenca.component';

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
    ConfirmarPresencaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
