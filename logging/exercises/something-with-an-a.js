let userInput = prompt('please enter something with an "a" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else {
  if (userInput.includes('a')) {
    reaction = '"' + userInput + '" is perfect!';
  } else {
    reaction = '"' + userInput + '" has no "a" in it';
  }
}

alert(reaction);
