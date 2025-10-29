import { ComportamentoVoo } from '../interfaces/ComportamentoVoo';

export class VooComAsas implements ComportamentoVoo {
  voar(): string {
    return "Estou voando com asas!";
  }
}