//if i don't pass the second parametar then this will work as backup for the funtion.
function add (num1,num2=0) 
{
    //num2 =num2 || 0;
    return num1+ num2;

}
const total = add(14,15);
console.log (total);

