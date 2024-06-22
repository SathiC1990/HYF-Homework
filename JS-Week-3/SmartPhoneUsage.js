const activities = [];


function addActivity(date, activity, duration) {
    const activityObject = {
        date: new Date().toLocaleDateString(),
        activity: activity,
        duration: duration
    };
    activities.push(activityObject);
}
addActivity("23/7-18", "Youtube", 30);
console.log(activities);

let usageLimit = 100;
function showStatus() {
    if (activities.length === 0) {
        return "Add some activities before calling showStatus";
    }
    
    let totalActivities = activities.length;
    let totalDuration = activities.reduce((sum, activity) => sum + activity.duration, 0);
    
    return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage`;
}


console.log(showStatus()); 
 

// Modified showStatus function with limit check
function showStatus() {
    if (activities.length === 0) {
        return "Add some activities before calling showStatus";
    }
    
    let totalActivities = activities.length;
    let totalDuration = activities.reduce((sum, activity) => sum + activity.duration, 0);
    
    if (totalDuration > usageLimit) {
        return "You have reached your limit, no more smartphoning for you!";
    }
    
    return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage`;
}

function mostTimeSpentActivity() {
    if (activities.length === 0) {
        return "No activities to analyze";
    }
    
    let maxActivity = activities.reduce((max, activity) => 
        activity.duration > max.duration ? activity : max, 
        activities[0]
    );
    
    return `You have spent the most time on ${maxActivity.activity} with ${maxActivity.duration} min.`;
}


// Example usage with more activities
addActivity("23/7-18", "Running", 45);
addActivity("24/7-18", "Reading", 60);
addActivity("24/5-18", "Singing", 58);
console.log(showStatus());
console.log(mostTimeSpentActivity());