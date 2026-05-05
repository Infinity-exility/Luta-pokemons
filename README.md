🧾 Descrição do Projeto

Neste projeto, eu desenvolvi uma simulação de batalha por turnos entre dois personagens inspirados em Pokémon. Cada personagem possui atributos como nome, pontos de vida (HP) e poder de ataque.

A batalha acontece em até 5 rodadas. Em cada rodada, eu simulo a rolagem de um dado de 20 lados para cada personagem, somo esse valor ao poder de ataque e comparo os resultados. O personagem com maior valor causa dano no adversário, e esse dano é calculado pela diferença entre os ataques.

A batalha termina quando um dos personagens perde toda a vida ou quando as rodadas acabam. No final, o sistema informa quem venceu ou se houve empate.

📚 Conceitos que eu utilizei
💻 Programação em JavaScript

Neste projeto, eu utilizei JavaScript para implementar toda a lógica da batalha, criando variáveis, funções e organizando o código de forma estruturada.

🧠 Lógica de Programação

Eu apliquei lógica de programação para controlar o funcionamento do jogo, utilizando:

laços de repetição (for) para representar as rodadas
estruturas condicionais (if/else) para decidir quem causou dano
operadores de comparação para verificar os resultados dos ataques
controle de fluxo com break para encerrar a batalha quando necessário
🎲 Aleatoriedade e Matemática

Para simular a imprevisibilidade da batalha, utilizei Math.random() para gerar números aleatórios, representando a rolagem de um dado de 20 lados. Também utilizei operações matemáticas como soma (para calcular o ataque) e subtração (para calcular o dano).

🧱 Estruturas de Dados (Objetos)

Modelei os personagens utilizando objetos, armazenando informações como nome, HP e poder. Isso ajudou a organizar melhor os dados e facilitar o acesso às informações durante a execução da batalha.

⚙️ Programação Assíncrona

Utilizei funções assíncronas com async e await para estruturar melhor a execução do código, garantindo que as ações aconteçam na ordem correta.

🖥️ Saída de Dados

Utilizei console.log() para exibir todas as informações da batalha, como as rodadas, valores dos dados, danos causados e o resultado final.
