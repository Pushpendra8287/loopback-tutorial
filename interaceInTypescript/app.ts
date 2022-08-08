// interface is an custom type 
export {}
interface Namepro{
    firstname:string,
    lastname:string
}
let namets = (nameProperty: Namepro) => {
    console.log(nameProperty.lastname,nameProperty.firstname)
}
namets({
    firstname:"pushpendra ",
    lastname:"kumar"
    
})
