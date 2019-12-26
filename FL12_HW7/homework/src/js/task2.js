let start = confirm('Do you want to play a game?');
const rangeIncrease = 4;
const prizeIncrease = 2;
const prizeDecrease = 2;
const maxAttempts = 3;

if (start) {
   let game = true;
   while (game) {
      let topPossiblePrize = 100;
      let topLimitNumber = 8;
      let totalPrize = 0;
      let possiblePrize = 100;

      let randomNumber = Math.floor(Math.random() * (topLimitNumber + 1));
      console.log(randomNumber);

      let attempt = maxAttempts;
      let enterGues;

      while (attempt > 0 && enterGues !== randomNumber) {
         if (attempt < maxAttempts) {
            possiblePrize = possiblePrize / prizeDecrease;
         }
         enterGues = parseInt(prompt(
            'Choose a roulette pocket number from 0 to ' + topLimitNumber +
            '\nAttempts left: ' + attempt +
            '\nTotal prize: ' + totalPrize + '$' +
            '\nPossible prize on current attempt: ' + possiblePrize + '$'));
         attempt--;
      }

      if (enterGues === randomNumber) {
         totalPrize += possiblePrize;
         let continueGame = confirm('Congratulation, you won!   ' +
                                    'Your prize is: ' + totalPrize + ' $. Do you want to continue?');
         if (continueGame) {
            topLimitNumber += rangeIncrease;
            topPossiblePrize *= prizeIncrease;
            possiblePrize = topPossiblePrize;
            enterGues = undefined;
            randomNumber = Math.floor(Math.random() * (topLimitNumber + 1));
            console.log(randomNumber);

            while (continueGame) {
               attempt = maxAttempts;
               enterGues = undefined;
               while (attempt > 0 && enterGues !== randomNumber) {
                  if (attempt < maxAttempts) {
                     possiblePrize = possiblePrize / prizeDecrease;
                  }
                  enterGues = parseInt(prompt('Choose a roulette pocket number from 0 to ' + topLimitNumber +
                                              '\nAttempts left: ' + attempt +
                                              '\nTotal prize: ' + totalPrize + '$' +
                                              '\nPossible prize on current attempt: ' + possiblePrize + '$'));
                  attempt--;
               }

               if (enterGues === randomNumber) {
                  totalPrize += possiblePrize;
                  continueGame = confirm('Congratulation, you won!   ' +
                                         'Your prize is: ' + totalPrize + '$. Do you want to continue?');
                  if (continueGame) {
                     topLimitNumber += rangeIncrease;
                     topPossiblePrize *= prizeIncrease;
                     possiblePrize = topPossiblePrize;
                     randomNumber = Math.floor(Math.random() * (topLimitNumber + 1));
                     console.log(randomNumber);

                     enterGues = undefined;
                  }
               } else {
                  totalPrize = 0;
                  continueGame = false;
               }
            }
         }
      }

      alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
      game = confirm('Do you want play again?');

   }
}
alert('You did not become a billionaire, but can.');
