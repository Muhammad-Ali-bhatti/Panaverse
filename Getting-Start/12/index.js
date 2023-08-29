"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Iman Ishtiaq', 'Ahmed Ishtiaq', 'Muhammad Ishtiaq'];
console.log(guest_list[2], "He can,t Make the Dinner");
guest_list[2] = 'Muhammad Shabbir';
for (let i = 0; i < guest_list.length; i++) {
    console.log(guest_list[i], "You Are Invited to Dinner");
}
