function studentScore (marks){

    if(marks < 0 || marks > 100){

        console.log("Invalid input! Please enter a number starting from 0 to 100")

        return;

    }


    if (marks >= 79){

        console.log("A");
    } else if (marks >= 60){

        console.log("B");
        
    }else if (marks >= 49){
        console.log("C");

    }else if ( marks >= 40){
        console.log("D");

    }else if (marks <= 39){
        console.log("E");
    }
}
studentScore(70);