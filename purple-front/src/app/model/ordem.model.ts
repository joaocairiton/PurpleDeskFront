import { Tipo } from './tipo.model';
import { Laboratorio } from './laboratorio.model';
import { Pessoa } from './pessoa.model';

export class Ordem {
    id:             number;
    descricao:      Tipo = new Tipo();
    labNome:        Laboratorio = new Laboratorio();
    funcionario:    Pessoa = new Pessoa();
    cliente:        Pessoa = new Pessoa();
    dataEmissao:    Date;
    dataFechamento: Date;
    status:         string;
    descricaoServ:  string;
    local:          string;
}
