import { PatoDeBorracha } from './PatoDeBorracha';

describe('PatoDeBorracha', () => {
  let patoDeBorracha: PatoDeBorracha;

  beforeEach(() => {
    patoDeBorracha = new PatoDeBorracha();
  });

  it('deve flutuar (usando a interface de nado)', () => {
    expect(patoDeBorracha.executarNado()).toBe("Estou flutuando na água.");
  });

  it('deve fazer Squeak', () => {
    expect(patoDeBorracha.executarSom()).toBe("Squeak!");
  });

  it('não deve ter o método executarVoo', () => {
    // Como o TypeScript é tipado, o teste é que isso NEM COMPILA
    // Mas para um teste unitário, podemos checar se a propriedade não existe
    expect((patoDeBorracha as any).executarVoo).toBeUndefined();
  });
});