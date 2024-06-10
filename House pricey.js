const petersHouselengthInMeter = 8 ;
const petersHouseDepthInMeter = 10;
const petesrHouseWidthInMeyer = 10;
const volumeOfPetersHouseInMeter = petersHouselengthInMeter*petersHouseDepthInMeter*petesrHouseWidthInMeyer;
 const petersHouseGardenSizeInM2 = 100;
 const house1Cost = 2500000;
 const housePrice = volumeOfPetersHouseInMeter * 2.5 * 1000 + petersHouseGardenSizeInM2 * 300;
 if (house1Cost > housePrice) {
    console.log(`Peter is paying too much. The calculated price is ${housePrice}, but he is paying ${house1Cost}.`);
} else {
    console.log(`Peter is paying too little. The calculated price is ${housePrice}, but he is paying ${house1Cost}.`);
}
 const juliasHouselengthInMeter = 8;
const juliasHouseDepthInMeter = 11;
const juliasHouseWidthInMeter = 5;
const volumeOfjuliasHouseInMeter = juliasHouselengthInMeter*juliasHouseDepthInMeter*juliasHouseWidthInMeter;
 const juliasHouseGardenSizeInM2 = 70;
 const housePrice2 = volumeOfjuliasHouseInMeter * 2.5 * 1000 + juliasHouseGardenSizeInM2 * 300;
 const house2Cost = 1000000;
if (house2Cost>housePrice2){
    console.log(`Julia is paying to high.The calculated price is ${housePrice2}, but she is paying ${house2Cost}`);
}
else{
    console.log(`Julia is paying to low.The calculated price is ${housePrice2}, but she is paying ${house2Cost}`);
}
