const firstWords = ["Innovative",
"Creative",
"Dynamic",
"Visionary",
"NextGen",
"Bright",
"Future",
"Tech",
"Smart",
"Global"];
const secondWords = ["Solutions",
"Enterprises",
"Technologies",
"Innovations",
"Concepts",
"Ventures",
"Systems",
"Networks",
"Dynamics",
"Strategies"];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber1] + " "  + secondWords[randomNumber2];
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);