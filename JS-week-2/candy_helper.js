let boughtCandy = [];

function addCandy(candyType, weight){
    let cadies = ['sweet','chocolate','toffee','chewing_gum'];
    let candyPricePerGram = [0.5, 0.7, 0.3, 0.03];

   // let candyIndex = cadies.findIndex((element) => element === candyType);
   let candyIndex;
for (let index = 0; index < cadies.length; index++) {
    if(cadies[index] === candyType){
        candyIndex = index;
        break;
    }

}

    boughtCandy.push(candyPricePerGram[candyIndex] * weight);

    console.log(boughtCandy);
}

let amountToSpend = Math.random() * 100;

function canBuyMoreCandy(){
    let totalPrice = 0;
    let i=0;
    while(i < boughtCandy.length){
        totalPrice = totalPrice + boughtCandy[i];
        i++;
    }

    if(totalPrice < amountToSpend){
        console.log("You can buy more, so please do!");
        return true;
    }else{
        console.log("Enough candy for you!");
        return false;
    }
}

addCandy('toffee', 30);
addCandy('chocolate', 50);
canBuyMoreCandy();