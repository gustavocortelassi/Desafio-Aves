import { Ave } from './Ave';
import { NaoVoa } from './comportamentos/NaoVoa';
import { NadoExcelente } from './comportamentos/NadoExcelente';
import { Honk } from './comportamentos/Honk';

export class Pinguim extends Ave {
  constructor() {
    super(
      "Pinguim",
      new NaoVoa(), 
      new NadoExcelente(), 
      new Honk()
    );
  }
}