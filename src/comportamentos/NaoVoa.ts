import { ComportamentoVoo } from '../interfaces/ComportamentoVoo';

export class NaoVoa implements ComportamentoVoo {
  voar(): string {
    return "Eu não posso voar.";
  }
}