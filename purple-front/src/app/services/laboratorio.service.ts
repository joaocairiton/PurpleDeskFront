import { Laboratorio } from './../model/laboratorio.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/laboratorio';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<Laboratorio[]> {
    return this.http.get<Laboratorio[]>(url);
}

adicionar(Laboratorio): Observable<Laboratorio> {
  return this.http.post<Laboratorio>(url, Laboratorio, httpOptions);
}

alterar(id, Laboratorio): Observable<any> {
  const urlLocal = `${url}/${id}`;
  return this.http.put(urlLocal, Laboratorio, httpOptions);
}

excluir(id): Observable<Laboratorio> {
  const urlLocal = `${url}/${id}`;
  return this.http.delete<Laboratorio>(urlLocal, httpOptions);
}
}