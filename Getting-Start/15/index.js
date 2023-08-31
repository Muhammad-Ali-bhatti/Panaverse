"use strict";
let loc = ["Russia", "Dubai", "UK", "USA", "Japan"];
//*Print Your Array In Its Original Order.
console.log(loc);
//*Print Your Array In Alphabetical Order Without Modifying the Actual List.
let Alphabetical = [];
for (let i = 0; i < loc.length; i++) {
    Alphabetical[i] = loc[i];
}
console.log(Alphabetical.sort(), "Alphabetical");
//*Show That Your Array Is still In its Original Order by Printing it.
console.log(loc, "Original");
//*Print Your Array In Reverse Alphabetical order Without Changing The Order Of Its Original List.
let Reverse_Alphabetical = [];
for (let i = 0; i < loc.length; i++) {
    Reverse_Alphabetical[i] = loc[i];
}
console.log(Alphabetical.reverse(), "Reserse");
//*Show That Your Array Is still In its Original Order by Printing it.
console.log(loc, "Original");
//*Reverse The Order Of Your List. Print the array to Show That its order has Changed.
console.log(loc.reverse(), "Reverse");
//*Sort Your Array So it,s Stored in Reverse Alphabetical Order .Print the List To Show that Order Has Changed.
console.log(loc.sort(), "Alphabetical");
