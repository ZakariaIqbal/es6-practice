//const is not Changeable
const buddy = "Amir";
//buddy = "josim";
console.log (buddy); 

const number = [10,11,12,13,14,15];
number [1]= 88;
number.push(12);
console.log(number);

const nayok ={ name:"Sakib khan", phone:1234 };

//let is changeable

let patientName = "Zakaria";
patientName = "Sakib";
console.log (patientName);

let sum =0;
for ( var i = 0; i<10; i++) {
    
    sum = sum +i;
    
}
console.log(i);
