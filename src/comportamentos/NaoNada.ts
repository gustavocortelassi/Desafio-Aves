import { ComportamentoNado } from '../interfaces/ComportamentoNado';

export class NaoNada implements ComportamentoNado {
  nadar(): string {
    // Águias podem até pegar peixes, mas não "nadam" como patos.
    return "Eu não nado."; 
  }
}