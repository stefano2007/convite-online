import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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

//extensões
import 'src/app/shared/common/activedRoute-extensions';

//pipe customizado
import { SafePipe } from 'src/app/shared/pipes/safe-pipe';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { AniversariosFormComponent } from './components/aniversarios-form/aniversarios-form.component';
import { FotosFormComponent } from './components/fotos-form/fotos-form.component';
import { FotosTableComponent } from './components/fotos-table/fotos-table.component';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConfiguracoesFotosComponent } from './pages/configuracoes-fotos/configuracoes-fotos.component';
import { IndexComponent } from './pages/index/index.component';

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
    RespondaPresencaComponent,
    SafePipe,
    ConfiguracoesComponent,
    AniversariosFormComponent,
    FotosFormComponent,
    AniversariosFormComponent,
    FotosTableComponent,
    ConfiguracoesFotosComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      }),
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
