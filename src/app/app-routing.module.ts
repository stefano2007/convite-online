
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FestaComponent } from './components/festa/festa.component';
import { PresentesComponent } from './components/presentes/presentes.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { ConfirmarPresencaComponent } from './components/confirmar-presenca/confirmar-presenca.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'fotos', component: FotosComponent },
  { path: 'festa', component: FestaComponent },
  { path: 'presentes', component: PresentesComponent },
  { path: 'depoimentos', component: DepoimentosComponent },
  { path: 'confirmar-presenca', component: ConfirmarPresencaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
