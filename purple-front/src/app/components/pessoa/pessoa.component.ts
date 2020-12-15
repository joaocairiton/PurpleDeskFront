
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa[] = [];
  objeto: Pessoa = new Pessoa();
  mens = '';
  

  constructor(private api: PessoaService) { }

  ngOnInit(): void {
    this.consultar()
  }
  consultar() {
    this.api.consultar()
      .toPromise()
      .then
      (res => {
        this.pessoa = res;
      });
  }

  adicionar() {
    this.api.adicionar(this.objeto)
      .toPromise()
      .then(Pessoa => {
        this.mens = Pessoa.nome + " foi adicionado(a) com sucesso!";
        this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.objeto.id)
      .toPromise()
      .then(Pessoa => {
        this.mens = " Usuario excluido(a) com sucesso!";
        this.consultar();
      });
  }

  alterar() {
    this.api.alterar(this.objeto.id, this.objeto)
      .toPromise()
      .then(Pessoa => {
        this.mens = Pessoa.nome + " foi alterado(a) com sucesso!";
        this.consultar();
        
      });
  }

  carregarDados(c: Pessoa) {
    this.objeto = c;
  }
}