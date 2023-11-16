import * as readlineSync from 'readline-sync';
import showBanner from 'node-banner';
class TextBasedGame {
    playerHP;
    round;
    hasUsedEnergyPotion;
    constructor() {
        this.playerHP = 50;
        this.round = 1;
        this.hasUsedEnergyPotion = false;
    }
    startGame() {
        while (this.playerHP > 0) {
            console.log(`\t Round ${this.round}`);
            console.log('\t Enemy Arrived');
            console.log(`Player HP: ${this.playerHP}`);
            console.log("  1. Attacked");
            if (!this.hasUsedEnergyPotion) {
                console.log("  2. Drink Energy Potion");
            }
            const choice = readlineSync.question("Enter your choice (1 or 2): ");
            switch (choice) {
                case "1":
                    this.Attacked();
                    break;
                case "2":
                    if (!this.hasUsedEnergyPotion) {
                        this.drinkEnergyPotion();
                    }
                    else {
                        console.log("You've already used an energy potion in this round. Choose another option.");
                    }
                    break;
                default:
                    console.log("Invalid choice. Please enter 1 or 2.");
            }
        }
        console.log("Game Over. You were defeated!");
    }
    Attacked() {
        let enemyHP = Math.floor(Math.random() * 40) + 1;
        console.log(`Enemy HP: ${enemyHP}`);
        const damageDealt = Math.floor(Math.random() * 15) + 1;
        const damageTaken = Math.floor(Math.random() * 20) + 1;
        console.log(`You dealt ${damageDealt} damage.`);
        console.log(`You took ${damageTaken} damage.`);
        this.playerHP -= damageTaken;
        enemyHP -= damageDealt;
        if (this.playerHP >= enemyHP) {
            console.log("You defeated the enemy!");
            this.playerHP += 2; // Reward: +10 HP for defeating the enemy
            this.round++;
        }
        else {
            console.log("You were defeated by the enemy.");
        }
    }
    drinkEnergyPotion() {
        const potionHP = Math.floor(Math.random() * 10) + 1;
        console.log(`You drank an energy potion and gained ${potionHP} HP.`);
        this.playerHP += potionHP;
        this.hasUsedEnergyPotion = true;
    }
}
const game = new TextBasedGame();
setTimeout(() => {
    game.startGame();
}, 1000);
(async () => {
    await showBanner('Text-Game', 'This game is likely tekken game');
})();
