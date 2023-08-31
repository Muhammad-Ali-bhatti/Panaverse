

let guest_list = ['Muhammad Ali', 'Muhammad Rasheed', 'Malik Usman', "Zaki ALi", "syed"];

console.log("Hey! EveryOne We Are Sorry We Can Only Invite 2 Peoples For Dinner");
//Removing Element And Printing It Out
for (let i = 0, n = guest_list.length; i < n -2; i++) {
    console.log("We Are Sorry You Are Not Invited", guest_list.pop());
}
// Inviting and removing Element
for (let i = 0; i <= guest_list.length;  i++)
{
    console.log("Congratulations You Are Still Invited", guest_list.shift());
}

// Empty List
console.log(guest_list);