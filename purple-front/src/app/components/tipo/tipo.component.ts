import { Tipo } from './../../model/tipo.model';
import { Component, OnInit } from '@angular/core';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  tipo: Tipo[] = [];
  objeto: Tipo = new Tipo();
  mens = '';

  constructor(private api: TipoService) { }

  ngOnInit(): void {
    this.consultar()
  }
  consultar() {
    this.api.consultar()
      .toPromise()
      .then
      (res => {
        this.tipo = res;
      });
  }

  adicionar() {
    this.api.adicionar(this.objeto)
      .toPromise()
      .then(Tipo => {
        this.mens = Tipo.descricao + " foi adicionada com sucesso!";
        this.consultar();
      });
  }


  alterar() {
    this.api.alterar(this.objeto.id, this.objeto)
      .toPromise()
      .then(Tipo => {
        this.mens =  Tipo.descricao + " foi alterada com sucesso!";
        this.consultar();
      });
  }

  carregarDados(c: Tipo) {
    this.objeto = c;
  }
}

