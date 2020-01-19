const maximumAgility = 100;

function Fighter(data) {
   let secretData = data;
   secretData.wins = 0;
   secretData.loses = 0;

   this.getName = function() {
      return secretData.name;
   }
   this.getDamage = function() {
      return secretData.damage;
   }
   this.getStrength = function() {
      return secretData.strength;
   }
   this.getAgility = function() {
      return secretData.agility;
   }
   this.getHealth = function() {
      return secretData.hp;
   }

   this.logCombatHistory = function() {
      console.log('Name: ' + this.getName() + ', Wins: ' + secretData.wins + ', Losses: ' + secretData.loses);
   }
   this.heal = function(addHeal) {
      secretData.hp += addHeal;
   }
   this.dealDamage = function(damage) {
      secretData.hp -= damage;
      if (secretData.hp < 0) {
         secretData.hp = 0;
      }
   }
   this.addWin = function() {
      secretData.wins++;
   }
   this.addLoss = function() {
      secretData.loses++;
   }
   this.attack = function(opponent) {
      let randomProbability = Math.floor(Math.random() * maximumAgility);
      if (randomProbability >= opponent.getAgility()) {
         opponent.dealDamage(this.getDamage());
         console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + opponent.getName());
      } else {
         console.log(this.getName() + ' attack missed');
      }
   }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90});


function battle(opponent1, opponent2) {
   if (opponent1.getHealth() === 0) {
      console.log(opponent1.getName() + ' is dead and can`t fight.');
   } else if (opponent2.getHealth() === 0) {
      console.log(opponent2.getName() + ' is dead and can`t fight.');
   }
   while (opponent1.getHealth() > 0 && opponent2.getHealth() > 0) {
      opponent1.attack(opponent2);
      if (opponent2.getHealth() > 0) {
         opponent2.attack(opponent1);
      }
      if (opponent1.getHealth() === 0) {
         opponent1.addLoss();
         opponent2.addWin();
         console.log(opponent2.getName() + ' has won!');
      } else if (opponent2.getHealth() === 0) {
         opponent2.addLoss();
         opponent1.addWin();
         console.log(opponent1.getName() + ' has won!');
      }
   }
}

battle(fighter1, fighter2);
