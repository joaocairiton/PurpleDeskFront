import { Historico } from './../../model/historico.model';
import { Component, OnInit } from '@angular/core';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico: Historico[] = [];
  objeto: Historico = new Historico();
  mens = '';

  constructor(private api: HistoricoService) { }

  ngOnInit(): void {
    this.consultar()
  }
  consultar() {
    this.api.consultar()
      .toPromise()
      .then
      (res => {
        this.historico = res;
      });
  }

  adicionar() {
    this.api.adicionar(this.objeto)
      .toPromise()
      .then(Historico => {
        this.mens = "Historico nº " + Historico.id + " foi adicionada com sucesso!";
        this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.objeto.id)
      .toPromise()
      .then(Historico => {
        this.mens = " Historico excluido com sucesso!";
        this.consultar();
      });
  }


  carregarDados(c: Historico) {
    this.objeto = c;
  }
}

