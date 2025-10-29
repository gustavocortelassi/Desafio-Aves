import { ComportamentoSom } from '../interfaces/ComportamentoSom';

export class Screech implements ComportamentoSom {
  fazerSom(): string {
    return "Screech!"; // O som agudo da águia
  }
}