const player1 = {
  NOME: "Haxorus",
  HP: 170,
  PODER: 80,
};

const player2 = {
  NOME: "Salamence",
  HP: 150,
  PODER: 120,
};

async function rollDice() {
  return Math.floor(Math.random() * 20) + 1; // 🎲 D20
}

async function playBattleEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let attack1 = diceResult1 + character1.PODER;
    let attack2 = diceResult2 + character2.PODER;

    console.log(`${character1.NOME} 🎲 rolou ${diceResult1} + ${character1.PODER} = ${attack1}`);
    console.log(`${character2.NOME} 🎲 rolou ${diceResult2} + ${character2.PODER} = ${attack2}`);

    if (attack1 > attack2) {
      let damage = attack1 - attack2;
      character2.HP -= damage;
      console.log(`${character1.NOME} causou ${damage} de dano em ${character2.NOME}!`);
    } else if (attack2 > attack1) {
      let damage = attack2 - attack1;
      character1.HP -= damage;
      console.log(`${character2.NOME} causou ${damage} de dano em ${character1.NOME}!`);
    } else {
      console.log("Empate! Nenhum dano causado.");
    }

    console.log(`❤️ ${character1.NOME}: ${character1.HP} HP`);
    console.log(`❤️ ${character2.NOME}: ${character2.HP} HP`);
    console.log("-----------------------------");

    if (character1.HP <= 0 || character2.HP <= 0) {
      break;
    }
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");

  if (character1.HP > character2.HP)
    console.log(`\n${character1.NOME} venceu a batalha! 🏆`);
  else if (character2.HP > character1.HP)
    console.log(`\n${character2.NOME} venceu a batalha! 🏆`);
  else console.log("A batalha terminou em empate");
}

(async function main() {
  console.log(
    `🏁🚨 Batalha entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playBattleEngine(player1, player2);
  await declareWinner(player1, player2);
})();