
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FestaComponent } from './pages/festa/festa.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { ConfirmarPresencaComponent } from './pages/confirmar-presenca/confirmar-presenca.component';
import { Erro404Component } from './pages/erro404/erro404.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { ConfiguracoesFotosComponent } from './pages/configuracoes-fotos/configuracoes-fotos.component';
import { IndexComponent } from './pages/index/index.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: ':slug', component: HomeComponent},
  { path: ':slug/fotos', component: FotosComponent },
  { path: ':slug/festa', component: FestaComponent },
  { path: ':slug/presentes', component: PresentesComponent },
  { path: ':slug/depoimentos', component: DepoimentosComponent },
  { path: ':slug/confirmar-presenca', component: ConfirmarPresencaComponent },
  { path: ':slug/configuracoes', component: ConfiguracoesComponent },
  { path: ':slug/configuracoes-fotos', component: ConfiguracoesFotosComponent },
  { path: 'p/nao-encontrado', component: Erro404Component },
  { path: '', redirectTo: environment.slugPadrao , pathMatch: 'full' },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
