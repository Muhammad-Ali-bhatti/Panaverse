let Name = "ALi";

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

function toTitleCase(input: string): string {
    return input.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(toTitleCase(Name));