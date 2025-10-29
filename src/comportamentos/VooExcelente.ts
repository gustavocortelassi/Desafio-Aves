import { ComportamentoVoo } from '../interfaces/ComportamentoVoo';

export class VooExcelente implements ComportamentoVoo {
  voar(): string {
    return "Estou planando majestosamente!";
  }
}