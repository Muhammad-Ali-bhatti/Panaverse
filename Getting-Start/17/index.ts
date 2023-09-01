


const promptSync = require("prompt-sync")();

let input : number = promptSync("Number Of Favorit Places: ");
let favorite_places = [];
for (let i = 0; i < input; i++)
{
    favorite_places[i] = promptSync("Name Your Favorite Place: ");
}

console.log(favorite_places);