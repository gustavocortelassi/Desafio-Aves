import { ComportamentoSom } from '../interfaces/ComportamentoSom';

export class Honk implements ComportamentoSom {
  fazerSom(): string {
    return "Honk! Honk!"; // Um som comum associado a pinguins
  }
}