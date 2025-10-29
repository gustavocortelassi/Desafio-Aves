import { Aguia } from './Aguia';

describe('Aguia', () => {
  let aguia: Aguia;

  beforeEach(() => {
    aguia = new Aguia();
  });

  it('deve ter um voo excelente', () => {
    expect(aguia.executarVoo()).toBe("Estou planando majestosamente!");
  });

  it('não deve nadar', () => {
    expect(aguia.executarNado()).toBe("Eu não nado.");
  });

  it('deve fazer Screech', () => {
    expect(aguia.executarSom()).toBe("Screech!");
  });

  it('deve ser capaz de caçar (método próprio)', () => {
    // Importante testar métodos que são só da Águia
    expect(aguia.cacar()).toBe("Estou caçando...");
  });
});