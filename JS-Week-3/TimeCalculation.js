const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  }
function timeCalculation(travelInformation){
    let totalTravelTime =   travelInformation.destinationDistance/travelInformation.speed;
    const hours = Math.floor(totalTravelTime);
const minutes = Math.round((totalTravelTime - hours) * 60);
return `${hours} hours and ${minutes} minutes`;
}
  
  const travelTime = timeCalculation(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes

