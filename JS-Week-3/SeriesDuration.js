const seriesDurations1 = [
    
    {
        title: "Money Heist",
        days: 2,
        hours: 0,
        minutes: 34,
    },
    {
        title: "Kaala Paani",
        days: 0,
        hours: 7,
        minutes: 3,
    },
    {
        title: "House of cards",
        days: 2,
        hours: 14,
        minutes: 3,
      },
    ];

const averageLifespanYears1 = 80;
const averageLifespanMinutes = averageLifespanYears1 * 365.25 * 24 * 60;

function calculateSeriesPercentage(durations) {
    durations.forEach(series => {
        const seriesMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;
        const percentageOfLife = (seriesMinutes / averageLifespanMinutes) * 100;
        console.log(`${series.title} took ${percentageOfLife.toFixed(3)}% of my life`);
    });
}

calculateSeriesPercentage(seriesDurations1);


