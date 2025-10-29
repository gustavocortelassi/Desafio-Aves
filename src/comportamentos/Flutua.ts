import { ComportamentoNado } from '../interfaces/ComportamentoNado';

export class Flutua implements ComportamentoNado {
  nadar(): string {
    // Note que usamos a interface "nadar" para o comportamento "flutuar"
    return "Estou flutuando na água.";
  }
}