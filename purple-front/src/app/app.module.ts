import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { OrdemComponent } from './components/ordem/ordem.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { OrdemAdminComponent } from './components/ordem-admin/ordem-admin.component';
import { RegistroComponent } from './components/registro/registro.component';

//PrimeNG components
import {InputMaskModule} from 'primeng/inputmask';
import { AuthService } from './components/login/auth.service';





@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    HistoricoComponent,
    TipoComponent,
    OrdemComponent,
    LaboratorioComponent,
    LoginComponent,
    OrdemAdminComponent,
    RegistroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule


  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
