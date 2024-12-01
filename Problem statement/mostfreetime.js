let events = ["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"];

function mostfreetime(interval){

    function convertToMinutes(time){
        let {hours,minutes} = time.hours.split(":").map(Number)
        if (hours !== 12 && time.peroid === "PM") hours+12;
        if(hours ===12 &time.peroid === "AM") hours =0;
        return hours * 60 + minutes;
    };
    let arr = []
    for(let i=0;i<interval.length;i++){
        let startTime= interval[i].split("-")[0];
        let endTime= interval[i].split("-")[1];
         let {hours,peroid} = startTime.split(/(?=[APM])/);
        let startTimeObj = convertToMinutes({hours:hours,peroid:peroid});
         let {hours1,peroid1} = endTime.split(/(?=[APM])/);
        let endTimeObj = convertToMinutes({hours:hours1,period:peroid1});
arr.push({start:startTimeObj,end:endTimeObj})
    }
    return arr
}

// console.log(mostfreetime(events));
console.log("12:15PM-02:00PM".split(/(?=[APM])/))

