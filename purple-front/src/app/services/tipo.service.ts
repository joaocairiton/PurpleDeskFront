import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo } from '../model/tipo.model';

const url = 'http://localhost:8080/tipo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(url);
  }
  
  adicionar(Tipo): Observable<Tipo> {
    debugger
    return this.http.post<Tipo>(url, Tipo, httpOptions);
  }
  
  alterar(id, Tipo): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, Tipo, httpOptions);
  }
  
  excluir(id): Observable<Tipo> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Tipo>(urlLocal, httpOptions);
  }
  }
