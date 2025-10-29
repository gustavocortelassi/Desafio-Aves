import { Ave } from './Ave';
import { VooExcelente } from './comportamentos/VooExcelente';
import { NaoNada } from './comportamentos/NaoNada';
import { Screech } from './comportamentos/Screech';

export class Aguia extends Ave {
  constructor() {
    super(
      "Águia (Ave de Rapina)",
      new VooExcelente(), // Excelente em voar
      new NaoNada(),      // Não nada
      new Screech()       // Faz "Screech!"
    );
  }

  // A Águia também pode ter métodos próprios, se necessário
  public cacar(): string {
    return "Estou caçando...";
  }
}