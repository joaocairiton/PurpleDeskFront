import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/model/laboratorio.model';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

 
  laboratorio: Laboratorio[] = [];
  objeto: Laboratorio = new Laboratorio();
  mens = '';

  constructor(private api: LaboratorioService) { }

  ngOnInit(): void {
    this.consultar()
  }
  consultar() {
    this.api.consultar()
      .toPromise()
      .then
      (res => {
        this.laboratorio = res;
      });
  }

  adicionar() {
    this.api.adicionar(this.objeto)
      .toPromise()
      .then(Laboratorio => {
        this.mens = "Laboratório nº " + Laboratorio.id + " foi adicionada com sucesso!";
        this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.objeto.id)
      .toPromise()
      .then(Laboratorio => {
        this.mens = " Laboratório excluido com sucesso!";
        this.consultar();
      });
  }

  alterar() {
    this.api.alterar(this.objeto.id, this.objeto)
      .toPromise()
      .then(Laboratorio => {
        this.mens = "Laboratório nº " + Laboratorio.id + "foi alterado com sucesso!";
        this.consultar();
      });
  }

  carregarDados(c: Laboratorio) {
    this.objeto = c;
  }
}