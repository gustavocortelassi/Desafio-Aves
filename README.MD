# 🚀 Projeto POO: Simulação de Aves (Strategy Pattern)

Este projeto é uma atividade da disciplina de Programação Orientada a Objetos que demonstra a aplicação de princípios de design, como **Composição sobre Herança** e **Test-Driven Development (TDD)**.

## 🎯 Contexto do Problema

O objetivo era modelar um sistema de diferentes tipos de aves com comportamentos específicos (voar, nadar, fazer som). O principal desafio de design era lidar com:

* **Aves com comportamentos variados:** Uma Águia voa, mas um Pinguim (que é uma ave) não voa.
* **Objetos que não são aves:** Um Pato de Borracha "nada" (flutua) e faz som, mas não é um animal e não deve herdar da classe `Ave`.

A herança simples falha em modelar este cenário, pois levaria a quebras do **Princípio da Substituição de Liskov (LSP)**.

## 🛠️ A Solução: Strategy Pattern (Composição)

Para resolver este problema, aplicamos o **Strategy Pattern**. Em vez de as classes *serem* seus comportamentos (Herança), elas *têm* seus comportamentos (Composição).

1.  **Isolamento de Comportamentos:** Os comportamentos que variam (voar, nadar, som) foram extraídos para suas próprias **interfaces**:
    * `ComportamentoVoo`
    * `ComportamentoNado`
    * `ComportamentoSom`

2.  **Implementações Concretas:** Criamos classes "estratégia" para cada comportamento:
    * **Voo:** `VooComAsas`, `NaoVoa`, `VooExcelente`.
    * **Nado:** `NadoComPatas`, `NadoExcelente`, `NaoNada`, `Flutua`.
    * **Som:** `Quack`, `Screech`, `Honk`, `Squeak`.

3.  **Composição:** A classe base `Ave` não implementa `voar()`. Em vez disso, ela possui atributos para as interfaces de comportamento e delega a execução para eles.

Isso nos permite "montar" um objeto com os comportamentos desejados. O `Pinguim` herda de `Ave` e recebe a estratégia `NaoVoa`, enquanto o `PatoDeBorracha` (que não herda de `Ave`) reutiliza as interfaces `ComportamentoNado` (com a estratégia `Flutua`) e `ComportamentoSom` (com `Squeak`).

## 🧪 TDD (Test-Driven Development)

Todo o projeto foi desenvolvido seguindo a metodologia TDD (Ciclo Red-Green-Refactor). Os testes unitários foram escritos *antes* da implementação da lógica, garantindo que a arquitetura escolhida atendesse a todos os requisitos.

### Como Executar os Testes

1.  Clone este repositório.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute a suíte de testes:
    ```bash
    npm test
    ```

O resultado esperado é 100% de aprovação em todos os testes:

> ```
> PASS  src/PatoSelvagem.test.ts
> PASS  src/Aguia.test.ts
> PASS  src/PatoDeBorracha.test.ts
> PASS  src/Pinguim.test.ts
>
> Test Suites: 4 passed, 4 total
> Tests:       11 passed, 11 total
> Ran all test suites.
> ```

## 📁 Estrutura do Projeto