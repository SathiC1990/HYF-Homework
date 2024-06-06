
const dogYearOfBirth = 2017; 
const dogYearFuture = 2027;  
const shouldShowResultInDogYears = true; 
const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
const dogAgeInDogYears = dogAgeInHumanYears * 15;
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}.`);
} else {
    console.log(`Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}.`);
}
