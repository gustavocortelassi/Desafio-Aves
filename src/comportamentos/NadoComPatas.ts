import { ComportamentoNado } from '../interfaces/ComportamentoNado';

export class NadoComPatas implements ComportamentoNado {
  nadar(): string {
    return "Estou nadando com patas!";
  }
}