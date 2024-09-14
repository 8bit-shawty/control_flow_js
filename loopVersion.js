const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpacePerPlant = 0.8;
const startingPlants = 20;

let currentWeek = 0;
const totalWeeks = 3
// console.log(plants)

// const growthRate = 2;
// const  maxPlantCap = (area / minSpacePerPlant); //98.125


let plants = startingPlants * 2 ** currentWeek
let plantSpace = startingPlants *0.8
// console.log(plantSpace)
const garden80Percent = area * 0.8;
const garden50Percent = area * 0.5;


for(let i = 0; i < totalWeeks; i++){
    let plants = startingPlants * 2 ** currentWeek
    let plantSpace = plants *0.8

    console.log(`Total plants: ${plants} \nSpace needed for plants ${plantSpace} square meters \nGarden area: ${area}`)

if(plantSpace > garden80Percent){
    console.log(`Week: ${currentWeek + 1} | Pruned: stop them from exceeding the capacity of the garden.`)
} else if(plantSpace > garden50Percent){
    console.log(`Week: ${currentWeek + 1} | Monitor: They are growing at an acceptable rate`)
} else{
    console.log(`Week: ${currentWeek + 1} | The plant has been planted`)
}
currentWeek++;

}