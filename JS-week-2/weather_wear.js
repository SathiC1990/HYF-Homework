function getWhattoWear (temInCelcius){
  if(temInCelcius < 8){
    return "Winter Jacket";
  }else if(temInCelcius > 8 && temInCelcius < 15){
    return "Autumn Jacket";
  }else
    return "TShirt" ;
}
const clothesToWear = getWhattoWear(12);
console.log(clothesToWear)