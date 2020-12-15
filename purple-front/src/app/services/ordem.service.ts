import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordem } from '../model/ordem.model';


const url = 'http://localhost:8080/ordem';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<Ordem[]> {
    return this.http.get<Ordem[]>(url);
}

adicionar(Ordem): Observable<Ordem> {
debugger
  return this.http.post<Ordem>(url, Ordem, httpOptions);
}

alterar(id, Ordem): Observable<any> {
  const urlLocal = `${url}/${id}`;
  return this.http.put(urlLocal, Ordem, httpOptions);
}

excluir(id): Observable<Ordem> {
  const urlLocal = `${url}/${id}`;
  return this.http.delete<Ordem>(urlLocal, httpOptions);
}
}
