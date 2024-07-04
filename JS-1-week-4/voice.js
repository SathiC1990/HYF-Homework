let userName = "";
const toDo = [];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const numericalRegex = /\d/;

function getReply(command) {
  // Handling name introduction
  const cleanCommand = command.toLowerCase().trim();

  if (cleanCommand.startsWith("hello my name is ")) {
    userName = command.slice(17).trim();
    if (userName && userName.toLowerCase() === name.toLowerCase()) {
      return `You've already introduced yourself, ${userName}.`;
    } else {
      return `Nice to meet you, ${userName}.`;
    }
  }
  /*if (command.toLowerCase().startsWith("hello my name is ")) {
    userName = command.slice(17).trim();
    if (userName && userName.toLowerCase() === name.toLowerCase()) {
      return `You've already introduced yourself, ${userName}.`;
    } else {
      return `Nice to meet you, ${userName}.`;
    }
  }*/
  /*if (command.toLowerCase().startsWith("what is my name")) {
    return `your name is ${userName}`;
  }*/
 
    if (cleanCommand.startsWith("what is my name")){
      return `your name is ${userName}`;
  }

    else if (userName == "") {
    return `your name is not defined`;
  } else if 
    (cleanCommand.startsWith("add") &&
    cleanCommand.match("to my todo"))
   
    /*command.toLowerCase().startsWith("add") &&
    command.toLowerCase().match("to my todo")*/
   {
    let todoStr = command.slice(4, -11);
    toDo.push(todoStr);
    return `${todoStr} added to your todo`;
  } else if (
    command.toLowerCase().startsWith("remove") &&
    command.toLowerCase().match("from my todo")
  ) {
    let todoStr = command.slice(7, -13);
    toDo.pop(todoStr);
    return `Removed ${todoStr} from your todo`;
  } else if (command.toLowerCase() === "what is on my todo?") {
    let todoSize = toDo.length;
    let todoStr = todoSize > 1 ? toDo.join(" and ") : toDo[0];
    return `you have ${todoSize} todos - ${todoStr}`;
  } else if (command.toLowerCase() === "what day is it today?") {
    let date = new Date();
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day}. of ${month} ${year}`;
  } else if (
    numericalRegex.test(command) &&
    command.toLowerCase().startsWith("what is")
  ) {
    const additionRegex = /what is (\d+)\s*\+\s*(\d+)/i;
    const multiplicationRegex = /what is (\d+)\s*\*\s*(\d+)/i;
    const subtractionRegex = /what is (\d+)\s*\-\s*(\d+)/i;
    const divisionRegex = /what is (\d+)\s*\\\s*(\d+)/i;

    let additionMatch = command.match(additionRegex);
    if (additionMatch) {
      let num1 = parseInt(additionMatch[1], 10);
      let num2 = parseInt(additionMatch[2], 10);
      return num1 + num2;
    }

    let multiplicationMatch = command.match(multiplicationRegex);
    if (multiplicationMatch) {
      let num1 = parseInt(multiplicationMatch[1], 10);
      let num2 = parseInt(multiplicationMatch[2], 10);
      return num1 * num2;
      
    }

    let subtractionMatch = command.match(subtractionRegex);
    if (subtractionMatch) {
      let num1 = parseInt(subtractionMatch[1], 10);
      let num2 = parseInt(subtractionMatch[2], 10);
      return num1 - num2;
    }

    let divisionMatch = command.match(divisionRegex);
    if (divisionMatch) {
      let num1 = parseInt(divisionMatch[1], 10);
      let num2 = parseInt(divisionMatch[2], 10);
      return num1 / num2;
    }
  } else if (command.toLowerCase().startsWith("set a timer")) {
    let matches = command.match(/\d+/);
    console.log(`Timer set for ${matches} minutes`);
    let timierInSec = parseInt(matches[0], 10) * 60;

    const countdown = setInterval(() => {
      timierInSec--;

      if (timierInSec < 0) {
        clearInterval(countdown);
        console.log("Timer done");
      }
    }, 1000);
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("what is my name"));
console.log(getReply("add fishing to my todo"));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 22+3"));
getReply("Set a timer for 1 minutes");
//console.log(getReply("What is on my todo?"));
//console.log(getReply("What is on my todo?"));
