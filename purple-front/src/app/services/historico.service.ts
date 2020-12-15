import { Historico } from './../model/historico.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/historico';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  
  constructor(private http: HttpClient) { }

  consultar(): Observable<Historico[]> {
    return this.http.get<Historico[]>(url);
}

adicionar(Historico): Observable<Historico> {
  return this.http.post<Historico>(url, Historico, httpOptions);
}

alterar(id, Historico): Observable<any> {
  const urlLocal = `${url}/${id}`;
  return this.http.put(urlLocal, Historico, httpOptions);
}

excluir(id): Observable<Historico> {
  const urlLocal = `${url}/${id}`;
  return this.http.delete<Historico>(urlLocal, httpOptions);
}
}
