import { AuthService } from './components/login/auth.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'purple';

  
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
  sair(){
    this.authService.loginAutenticado = false;
    this.authService.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/']);
  }
}
