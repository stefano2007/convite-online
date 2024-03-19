
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FestaComponent } from './pages/festa/festa.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { ConfirmarPresencaComponent } from './pages/confirmar-presenca/confirmar-presenca.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', redirectTo: environment.slugPadrao , pathMatch: 'full' },
  { path: ':slug', component: HomeComponent},
  { path: ':slug/fotos', component: FotosComponent },
  { path: ':slug/festa', component: FestaComponent },
  { path: ':slug/presentes', component: PresentesComponent },
  { path: ':slug/depoimentos', component: DepoimentosComponent },
  { path: ':slug/confirmar-presenca', component: ConfirmarPresencaComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
