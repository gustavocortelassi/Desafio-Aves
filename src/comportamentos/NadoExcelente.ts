import { ComportamentoNado } from '../interfaces/ComportamentoNado';

export class NadoExcelente implements ComportamentoNado {
  nadar(): string {
    return "Estou nadando muito rápido e bem!";
  }
}