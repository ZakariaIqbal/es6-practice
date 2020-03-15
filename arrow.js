// This how we write normal Function

 function doubleit1(num){
        return num*2;
}
const result1 = doubleit1(10);
console.log(result1);

//Another one how we write function 

const doubleit2  = function(num) {
    return num*2
}
const result2 = doubleit2(5);
console.log(result2);

//Now using arrow Funtion

const doubleit3 = (num) => num*2;

const dubleit4  =(num1,num2=0) => num1+num2;

const dubleit5  = (num1 ,num2=0) => {

    const sum    = num1 + num2;
    const diff   = num2 - num1;
    const result = sum  * diff;

    return result;

}



const result3 = doubleit3(5);
console.log(result3);
const result4 = doubleit4(5);
console.log(result4);
const result5 = doubleit5(10,200);
console.log(result5);


