const ages = [10,20,30,24,53];
const ages2 = [41,52,23,56,43];
const ages3 = [24,55,43,21,12,45]

const allages  = [ages , ages2 ,5,ages3];
const allages2 = ages.concat(ages2).concat(5).concat(ages3);
const allages3 =[...ages,...ages2,5,...ages3];


console.log (allages);
console.log (allages2);
console.log(allages3);

const business = 650;
const minister = 450;
const sochib = 250;

const takapoisha =[650,450,250,850];

const maximum =Math.max(takapoisha);
const maximum1 =Math.max(...takapoisha);

console.log (maximum);
console.log (maximum1);