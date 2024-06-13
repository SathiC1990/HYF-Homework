function weekdayCalc(days){
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date();

    today.setDate(today.getDate() + days);

    console.log("The days is : "+weekdays[today.getDay()]);
}

weekdayCalc(9);