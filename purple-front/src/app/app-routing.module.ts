import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdemComponent } from './components/ordem/ordem.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { OrdemAdminComponent } from './components/ordem-admin/ordem-admin.component';


const routes: Routes = [
  {path: '', component: Component, canActivate: [AuthGuard]},
  {path: 'ordem', component: OrdemComponent, canActivate: [AuthGuard]},
  {path: 'historico', component: HistoricoComponent, canActivate: [AuthGuard]},
  {path: 'pessoa', component: PessoaComponent, canActivate: [AuthGuard]},
  {path: 'tipo',component: TipoComponent, canActivate: [AuthGuard]},
  {path: 'laboratorio',component: LaboratorioComponent, canActivate: [AuthGuard]},
  {path: 'login',component: LoginComponent},
  {path: 'ordem-admin', component: OrdemAdminComponent, canActivate: [AuthGuard]},
  {path: 'registro', component: RegistroComponent}
];
export const RoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
