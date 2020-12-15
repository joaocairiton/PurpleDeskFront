import { PessoaService } from 'src/app/services/pessoa.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { Historico } from './../../model/historico.model';
import { LaboratorioService } from './../../services/laboratorio.service';
import { Component, OnInit } from '@angular/core';
import { Ordem } from 'src/app/model/ordem.model';
import { OrdemService } from 'src/app/services/ordem.service';
import { Laboratorio } from 'src/app/model/laboratorio.model';
import { Pessoa } from 'src/app/model/pessoa.model';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.component.html',
  styleUrls: ['./ordem.component.css']
})
export class OrdemComponent implements OnInit {
 
  labLista: Laboratorio[] = [];
  objLab: Laboratorio = new Laboratorio();

  objHist: Historico;

  pesLista: Pessoa[] = [];
  objPes: Pessoa;
  
  ordemLista: Ordem[] = [];
  objeto: Ordem = new Ordem();
  mens = '';

  constructor(private api: OrdemService,
              private apiLab: LaboratorioService,
              private apiHist: HistoricoService,
              private apiPes: PessoaService) { }

  ngOnInit(): void {
    this.consultar()
    this.consultarLab()
    this.consultarApiCliente()
  }
  atribuirFunc(id) {
    this.objeto.funcionario.id = id;
    console.log(`id: ${this.objeto.funcionario.id}`);
  }
  atribuirTipo(id) {
    this.objeto.descricao.id = id;
    console.log(`id: ${this.objeto.descricao.id}`);
  }
  atribuirLab(id) {
    this.objeto.labNome.id = id;
    console.log(`labNome: ${this.objeto.labNome.id}`);
  }
  atribuirPes(id) {
    this.objeto.cliente.id = id;
    console.log(`id: ${this.objeto.cliente.id}`);
  }
  consultar() {
    this.api.consultar()
      .toPromise()
      .then
      (res => {
        this.ordemLista = res;
      });
  }
  consultarLab() {
    this.apiLab.consultar()
      .toPromise()
      .then
      (res => {
        this.labLista = res;
      });
  }
  consultarApiCliente(){
    this.apiPes.consultarCliente('Cliente')
    .toPromise()
    .then(res => {this.objPes = res;});
  }

  adicionar() {
    debugger
    this.api.adicionar(this.objeto)
      .toPromise()
      .then(Ordem => {
        this.mens = "Ordem nº " + Ordem.id + " foi adicionada com sucesso!";
        this.adicionarHist(Ordem);
        
      });
  }
  adicionarHist(objOrdem: Ordem){
    this.objHist = new Historico();
    this.objHist.ordemId = objOrdem;
    this.objHist.funcionario = objOrdem.cliente;
    this.objHist.dataFechamentoHistorico = objOrdem.dataEmissao;
    this.objHist.statusHistorico = objOrdem.status;

    this.apiHist.adicionar(this.objHist)
    .toPromise()
    .then(
      res => {
        this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.objeto.id)
      .toPromise()
      .then(Ordem => {
        this.mens = " Ordem excluida com sucesso!";
        this.consultar();
      });
  }

  alterar() {
    this.api.alterar(this.objeto.id, this.objeto)
      .toPromise()
      .then(Ordem => {
        this.mens = "Ordem nº " + Ordem.id + " foi alterada com sucesso!";
        this.adicionarHist(Ordem);
      });
  }

  carregarDados(c: Ordem) {
    this.objeto = c;
  }
}
