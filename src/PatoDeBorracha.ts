import { ComportamentoSom } from './interfaces/ComportamentoSom';
import { Squeak } from './comportamentos/Squeak';
import { ComportamentoNado } from './interfaces/ComportamentoNado';
import { Flutua } from './comportamentos/Flutua';

export class PatoDeBorracha {
  private comportamentoSom: ComportamentoSom;
  comportamentoNado: any;

  constructor() {
    this.comportamentoSom = new Squeak();
    this.comportamentoNado = new Flutua();
  }

  public flutuar(): string {
    return "Estou flutuando na água.";
  }

  public executarSom(): string {
    return this.comportamentoSom.fazerSom();
  }

  public executarNado(): string {
    return this.comportamentoNado.nadar();
  }
}