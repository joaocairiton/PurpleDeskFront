import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = 'http://localhost:8080/login';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
              private http: HttpClient) { }

 
  fazerLogin(login): Observable<Login> {
    debugger
    return this.http.post<Login>(url,login,httpOptions)
  }
  loginEstaAutenticado(){
    return this.loginAutenticado;
  }
  
}
