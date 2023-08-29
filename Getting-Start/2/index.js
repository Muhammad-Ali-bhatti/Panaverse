"use strict";
let Name = "ALi";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
function toTitleCase(input) {
    return input.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(Name)); // Output: "The Lord of the Rings: The Fellowship of the Ring"
