//Data Structures Exercise
const jedi = [];

jedi.push("Luke");
console.log(jedi);

jedi.push("Obi-Wan Kenobi");
console.log(jedi);

jedi.unshift("Yoda");
console.log(jedi);

console.log(jedi[1]);

jedi == jedi.pop();
console.log(jedi)

jedi.shift();
console.log(jedi);


const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

const starWarsVillans = sithLords.concat(imperialOfficers);
console.log(starWarsVillans);

console.log(starWarsVillans.slice(0, 1));
console.log(starWarsVillans.slice(1, 2));

const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}

console.log(droids.astromech);
console.log(droids.protocol);

droids.assassin = "IG-11";
console.log(droids.assassin);