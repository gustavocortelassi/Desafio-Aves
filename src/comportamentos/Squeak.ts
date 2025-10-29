import { ComportamentoSom } from '../interfaces/ComportamentoSom';

export class Squeak implements ComportamentoSom {
  fazerSom(): string {
    return "Squeak!"; // O som de apertar a borracha
  }
}