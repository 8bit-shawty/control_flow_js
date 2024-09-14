const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpacePerPlant = 0.8;
let startingPlants = 20;

let currentWeek = 0;
let plants = startingPlants * 2 ** currentWeek

// console.log(plants)

// const growthRate = 2;
// const  maxPlantCap = (area / minSpacePerPlant); //98.125

//First Week 

let plantSpace = startingPlants *0.8
// console.log(plantSpace)
const garden80Percent = area * 0.8;
const garden50Percent = area * 0.5;

//Predictions

//WEEK 1
//=========================================================================================
console.log(`Total plants: ${plants} \nSpace needed for plants ${plantSpace} square meters \nGarden area: ${area}`)

if(plantSpace > garden80Percent){
    console.log(`Week: ${currentWeek + 1} | Pruned: stop them from exceeding the capacity of the garden.`)
} else if(plantSpace > garden50Percent){
    console.log(`Week: ${currentWeek + 1} | Monitor: They are growing at an acceptable rate`)
} else{
    console.log(`Week: ${currentWeek + 1} | The plant has been planted`)
}
//=============================================================================================
//WEEK 2
//=========================================================================================
//increment week 
currentWeek++;

//recalculate
plants = startingPlants * 2 ** currentWeek

plantSpace = plants *0.8


console.log(`Total plants: ${plants} \nSpace needed for plants ${plantSpace} square meters \nGarden area: ${area}`)

if(plantSpace > garden80Percent){
    console.log(`Week: ${currentWeek + 1} | Pruned: stop them from exceeding the capacity of the garden.`)
} else if(plantSpace > garden50Percent){
    console.log(`Week: ${currentWeek + 1} | Monitor: They are growing at an acceptable rate`)
} else{
    console.log(`Week: ${currentWeek + 1} | The plant has been planted`)
}
//=============================================================================================
//WEEK 3
//=========================================================================================
currentWeek++;

//recalculate
plants = startingPlants * 2 ** currentWeek

plantSpace = plants *0.8

console.log(`Total plants: ${plants} \nSpace needed for plants ${plantSpace} square meters \nGarden area: ${area}`)

if(plantSpace > garden80Percent){
    console.log(`Week: ${currentWeek + 1} | Pruned: stop them from exceeding the capacity of the garden.`)
} else if(plantSpace > garden50Percent){
    console.log(`Week: ${currentWeek + 1} | Monitor: They are growing at an acceptable rate`)
} else{
    console.log(`Week: ${currentWeek + 1} | The plant has been planted`)
}
//=============================================================================================
//PART 2
currentWeek = 10;
plants = startingPlants * 2 ** currentWeek;
plantSpace = plants * minSpacePerPlant;

if(plantSpace > area ){
    let newSpace = plantSpace - area;
    let newRadius = minSpacePerPlant / PI
    console.log('New calculated radius: ' + newRadius + 'm')
} else{
    console.log("Space is fine for now...")
}

//=============================================================================================
//Part 3
console.log('\n \n========== PART 3 =========')
startingPlants = 100;
plantSpace = startingPlants * minSpacePerPlant;

try{
    if( plantSpace > area){
        throw ("Space required for plants: " + plantSpace + "\n Space total: " + area)
    } else{
        console.log("You have enough space to keep growing")
    }
}
catch(error){
    console.log(error)
}


