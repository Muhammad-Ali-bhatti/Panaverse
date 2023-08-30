

let guest_list = ['Muhammad Ali', 'Muhammad Rasheed', 'Malik Usman', "Zaki ALi"];

console.log("Hey! EveryOne We Found Bigger Dinning Table");
// First Element

guest_list.unshift("Muhammad Usman");
// Middle Element
guest_list.splice(2, 0, "Iman Ishtiaq");

//Add Element In The End Of Your List
guest_list.push("Abdul Rasheed");


// New Set Of Invitation

for (let i = 0; i < guest_list.length; i++)
{
    console.log("Congrulation You,re Invited", guest_list[i] );
}