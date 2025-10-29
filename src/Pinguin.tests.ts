import { Pinguim } from './Pinguim';

describe('Pinguim', () => {
  let pinguim: Pinguim;

  beforeEach(() => {
    pinguim = new Pinguim();
  });

  it('não deve voar', () => {
    expect(pinguim.executarVoo()).toBe("Eu não posso voar.");
  });

  it('deve ser um nadador excelente', () => {
    expect(pinguim.executarNado()).toBe("Estou nadando muito rápido e bem!");
  });

  it('deve fazer Honk', () => {
    expect(pinguim.executarSom()).toBe("Honk! Honk!");
  });
});