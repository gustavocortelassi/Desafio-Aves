import { ComportamentoSom } from '../interfaces/ComportamentoSom';

export class Quack implements ComportamentoSom {
  fazerSom(): string {
    return "Quack!";
  }
}