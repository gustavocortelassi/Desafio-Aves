import { Ave } from './Ave';
import { VooComAsas } from './comportamentos/VooComAsas';
import { NadoComPatas } from './comportamentos/NadoComPatas';
import { Quack } from './comportamentos/Quack';

export class PatoSelvagem extends Ave {
  constructor() {
    super(
      "Pato Selvagem",
      new VooComAsas(),
      new NadoComPatas(),
      new Quack()
    );
  }
}