import { Ordem } from './ordem.model';
import { Pessoa } from './pessoa.model';

export class Historico {
    id:                         number;
    ordemId:                    Ordem;
    funcionario:                Pessoa;
    dataFechamentoHistorico:    Date;
    statusHistorico:            string;
}
