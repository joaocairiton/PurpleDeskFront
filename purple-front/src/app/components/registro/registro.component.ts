import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  pessoaLista: Pessoa[] = [];
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
        this.pessoaLista = res;
      });
  }

  adicionar() {
    this.api.adicionar(this.objeto)
      .toPromise()
      .then(Pessoa => {
        this.mens = Pessoa.nome + " foi adicionada com sucesso!";
        this.consultar();
      });
  }



}
