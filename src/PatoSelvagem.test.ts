import { PatoSelvagem } from './PatoSelvagem';

describe('PatoSelvagem', () => {
  let pato: PatoSelvagem;

  // beforeEach é executado antes de cada 'it'
  beforeEach(() => {
    pato = new PatoSelvagem();
  });

  it('deve voar com asas', () => {
    expect(pato.executarVoo()).toBe("Estou voando com asas!");
  });

  it('deve nadar com patas', () => {
    expect(pato.executarNado()).toBe("Estou nadando com patas!");
  });

  it('deve fazer Quack', () => {
    expect(pato.executarSom()).toBe("Quack!");
  });

  it('deve se exibir corretamente', () => {
    // Você também pode testar os métodos da classe base
    expect(pato.nome).toBe("Pato Selvagem");
  });
});