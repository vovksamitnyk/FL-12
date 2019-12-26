const user01 = {email: 'user@gmail.com', password: 'UserPass'};
const user02 = {email: 'admin@gmail.com', password: 'AdminPass'};
const minEmailLength = 5;
const minPassLength = 6;

let users = [user01, user02];

let userFound = false;
let wrongEnter = false;
let tooShortPass = false;

let enteredEmail = prompt('Enter email:');
if (enteredEmail) {
   if (enteredEmail.length < minEmailLength) {
      alert('I don\'t know any emails having name ' +
            'length less than ' + minEmailLength + ' symbols');
      tooShortPass = true;
   }
   for (let i = 0; i < users.length; i++) {
      if (enteredEmail === users[i].email) {
         let enteredPassword = prompt('Enter password:');
         if (enteredPassword === null) {
            alert('Canceled.');
            tooShortPass = true;
         } else if (enteredPassword === users[i].password) {
            userFound = true;
            if (confirm('Do you want to change your password?')) {
               let enteredOldPassword = prompt('Enter Your old password:');
               if (enteredOldPassword === users[i].password) {
                  let enteredNewPassword = prompt('Enter Your new password:');
                  if (enteredNewPassword === null) {
                     alert('Canceled.');
                     break
                  } else if (enteredNewPassword.length < minPassLength) {
                     alert('It’s too short password. Sorry.');
                  } else {
                     let enteredNewPassword2 = prompt('Enter Your new password again:');
                     if (enteredNewPassword2 === null) {
                        alert('Canceled.');
                        break
                     } else if (enteredNewPassword2 !== enteredNewPassword) {
                        alert('You wrote the wrong password.');
                     } else {
                        users[i].password = enteredNewPassword;
                        alert('You have successfully changed your password.');
                     }
                  }
               } else {
                  alert('Wrong password!');
               }
            } else {
               alert('You have failed the change.');
            }
         } else {
            alert('Wrong password!');
            tooShortPass = true;
         }
         break
      }
   }
   if (!userFound && !tooShortPass) {
      alert('I don’t know you.');
   }
} else {
   wrongEnter = true;
}

if (wrongEnter) {
   alert('Canceled.');
}
