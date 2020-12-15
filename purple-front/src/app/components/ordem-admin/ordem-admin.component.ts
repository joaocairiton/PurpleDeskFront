import { HistoricoService } from 'src/app/services/historico.service';
import { Historico } from './../../model/historico.model';
import { PessoaService } from 'src/app/services/pessoa.service';
import { LaboratorioService } from './../../services/laboratorio.service';
import { Pessoa } from './../../model/pessoa.model';
import { Laboratorio } from './../../model/laboratorio.model';
import { TipoService } from 'src/app/services/tipo.service';
import { Component, OnInit } from '@angular/core';
import { Ordem } from 'src/app/model/ordem.model';
import { OrdemService } from 'src/app/services/ordem.service';
import { Tipo } from 'src/app/model/tipo.model';

@Component({
  selector: 'app-ordem-admin',
  templateUrl: './ordem-admin.component.html',
  styleUrls: ['./ordem-admin.component.css']
})
export class OrdemAdminComponent implements OnInit {
  
  pesLista: Pessoa[] = [];
  objPes: Pessoa;
  objFunc: Pessoa;

  labLista: Laboratorio[] = [];
  objLab: Laboratorio = new Laboratorio();

  tipoLista: Tipo[] = [];
  objTipo: Tipo = new Tipo();

  objHist: Historico;

  ordemLista: Ordem[] = [];
  objeto: Ordem = new Ordem();
  mens = '';

  constructor(private api: OrdemService,
              private apiTipo: TipoService,
              private apiLab: LaboratorioService,
              private apiPes: PessoaService,
              private apiHist: HistoricoService) { }

  ngOnInit(): void {
    this.consultar()
    this.consultarTipo()
    this.consultarLab()
    this.consultarPessoa()
    this.consultarApiCliente()
    this.consultarApiFuncionario()
  }

  atribuirTipo(id) {
    this.objeto.descricao.id = id;
    console.log(`id: ${this.objeto.descricao.id}`);
  }
  atribuirLab(id) {
    this.objeto.labNome.id = id;
    console.log(`id: ${this.objeto.labNome.id}`);
  }
  atribuirPes(id) {
    this.objeto.cliente.id = id;
    console.log(`id: ${this.objeto.cliente.id}`);
  }
  atribuirFunc(id) {
    this.objeto.funcionario.id = id;
    console.log(`id: ${this.objeto.funcionario.id}`);
  }

  consultarApiCliente(){
    this.apiPes.consultarCliente('Cliente')
    .toPromise()
    .then(res => {this.objPes = res;});
  }

  consultarApiFuncionario(){
    this.apiPes.consultarFuncionario('Funcionario')
    .toPromise()
    .then(res => {this.objFunc = res;});
  }

  consultar() {
    this.api.consultar()
      .toPromise()
      .then
      (res => {
        this.ordemLista = res;
      });
  }
  consultarTipo() {
    this.apiTipo.consultar()
      .toPromise()
      .then
      (res => {
        this.tipoLista = res;
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

  consultarPessoa() {
    this.apiPes.consultar()
    .toPromise()
    .then
    (res => {
      this.pesLista = res;
    });
  }

  adicionar() {
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
    this.objHist.funcionario = objOrdem.funcionario;
    this.objHist.dataFechamentoHistorico = objOrdem.dataFechamento;
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
