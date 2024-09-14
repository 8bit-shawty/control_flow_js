try{
    startingPlants = 100;
    plantSpace = startingPlants * minSpacePerPlant;

    if( plantSpace > area){
        throw ("Space required for plants: " + plantSpace + "\n Space total: " + area)
    } else{
        console.log("You have enough space to keep growing")
    }
}
catch(error){
    console.log(error)
}