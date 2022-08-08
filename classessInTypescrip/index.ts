export {}
class detaills{
    firstname: string;
    lastname: string;
    age:number;
    constructor( firstname: string,
        lastname: string,
        age:number)
        
    {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age 
    }
    grtFirstname(){
        //
        console.log(
        "my firstname is " + this.firstname, 
        this.lastname,
        this.age
    )};
    getLastname(){
        //
    }
}

// o0bject

// let datale = new detaills();
// datale.firstname = "pushpendra";
// datale.grtFirstname();
let datale = new detaills("Pushpendra","kumar",28);
datale.grtFirstname();