const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide some numbers as arguments.");
  process.exit(1);
}

const numbers = args.map(arg => {
  const parsed = Number(arg);
  if (isNaN(parsed)) {
    console.log(`"${arg}" is not a valid number.`);
    process.exit(1);  
  }
  return parsed;
});

const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log(`The average is: ${average}`);
