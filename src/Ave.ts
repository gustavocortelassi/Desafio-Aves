import { ComportamentoVoo } from './interfaces/ComportamentoVoo';
import { ComportamentoNado } from './interfaces/ComportamentoNado';
import { ComportamentoSom } from './interfaces/ComportamentoSom';

export abstract class Ave {
    protected comportamentoVoo: ComportamentoVoo;
    protected comportamentoNado: ComportamentoNado;
    protected comportamentoSom: ComportamentoSom;
    public nome: string;

    constructor(
        nome: string,
        voo: ComportamentoVoo,
        nado: ComportamentoNado,
        som: ComportamentoSom
    ) {
        this.nome = nome;
        this.comportamentoVoo = voo;
        this.comportamentoNado = nado;
        this.comportamentoSom = som;
    }

    public executarVoo(): string {
        return this.comportamentoVoo.voar();
    }

    public executarNado(): string {
        return this.comportamentoNado.nadar();
    }

    public executarSom(): string {
        return this.comportamentoSom.fazerSom();
    }

    public exibir(): void {
        console.log(`Olá, eu sou ${this.nome}.`);
    }
}