function speedGovernor(speed){

    let speedLimit =  70;

    let demeritPoints = 1;

    let demerit = 5;

    let overSpeeding =  speed - speedLimit;

    let points = (overSpeeding/demerit);

    let exceed = 60;

    let highSpeed = speedLimit + exceed;


    if (speed <= speedLimit){
        console.log("ok")
    }
    else if(speed >= highSpeed){
        console.log("Licence Suspended")
    }
    else if(speed > speedLimit){
        console.log("Points", + points)
    }

}

speedGovernor(150);