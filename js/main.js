/* console.log("Heidi you are brilliant");*/

 /* true or false=bolean data type */
 /* "" means it is a string */
 /* an array bc of the [] */ 

const hamster = {
    fluffy: true, 
    name: "Hammond", 
    age: 40,
    legs: 3,
    children: ["Captain Hook", "Peter Pan", "Sally"], 
    nickname: "Ham Sir", 
    chewing: function chew(what) { 
        console.log("chewing", what);
    },
}

hamster.chewing("carrot")
console.log("hamster stuff", hamster["name"]);
console.log(`The hamsters children are ${hamster.children[0]},
            ${hamster.children[1]},${hamster.children[2]}`);

for (let i = 0; i < hamster.children.length; i ++){
    console.log(`Hamster child: ${i + 1} - ${hamster.children[i]}`);
}            
hamster.children.forEach((item, index) =>{
    console.log(`Hamster child ${index} ${item}`);
});

const familyMembers = {
    familyMembers: ["Mom", "Dad", "Sister1", "Sister2"], 
}
const Mom = {
    age: 56,
    name: "Walley",
}
const Dad = {
    age: 66,
    name: "Don",
}
const Sister1 = {
    age: 35,
    name: "Jessica",
}
const Sister2 = {
    age: 39,
    name: "Nicole",
}