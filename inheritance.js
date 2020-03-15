class parent {
    constructor(){
        this.Fathername = "Iqbal";

    }
}

class child extends parent 
{
    constructor(name)
    {
        super ();
        this.name = name ; 
    }
    getFullName ()
    {
        return this.name +" " +this.Fathername;
    }
}
const baby = new child ("Zakaria");
const baby2 = new child ("Raisa");
console.log (baby.getFullName());
console.log (baby2.getFullName());