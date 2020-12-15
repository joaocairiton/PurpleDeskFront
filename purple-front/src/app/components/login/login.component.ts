import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  obj: Login = new Login();

  constructor(private authService: AuthService,
              private router: Router) { }
  
  
  ngOnInit(): void {
  }


  fazerLogin(){
    this.authService.fazerLogin(this.obj)
    .toPromise()
    .then(login => {
      var array = login[0];
      if(array === undefined){
        this.authService.loginAutenticado = false;
        alert('Usuario ou Senha Invalido!');
      }
      var retorno = array[2];
      if(retorno == 'Funcionario'){
        this.authService.loginAutenticado = true;
        this.authService.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/ordem-admin']);

      }else{
        this.authService.loginAutenticado = true;
        this.authService.mostrarMenuEmitter.emit(false);
        this.router.navigate(['/ordem']);
      }
    }

    )

  }

}
