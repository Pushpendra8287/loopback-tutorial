export {}
class Helloworld{
    constructor(message){
        console.log(message);
    }
}

const helloworld =  new Helloworld('welcome to typescript');
console.log(helloworld);
//=============================================
//generics Function 

function loggerAndReturn<T>(thing: T/*argument type*/) : T{
    return thing;
}
// const message : string = loggerAndReturn<string>('Hello From Generics Function')
const message : string = loggerAndReturn('Hello From Generics Function')
const message1 : number = loggerAndReturn(50)
console.log(message)
console.log(message1)

//================================================
//array Generics

function getArray<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

// let numArray = getArray<number>([1,2,3,4,5,6,7]);
// let str = getArray<string>(["Banana", "Apple", "Orange"]);
//
//if we remove number type or string type then run function again
let numArray = getArray([1,2,3,4,5,6,7]);
let str = getArray(["Banana", "Apple", "Orange"]);
console.log(numArray);
console.log(str);

// but if i will push number in string array then will give arror
// numArray.push("mangoes");
numArray.push(10);
console.log(numArray);
// str.push(10);
str.push("mangoes");
console.log(str);

//==============================================

// multiple type varrieable

function multiplTypeVariables<T,U>(id: T, name: U) : void {
    console.log((typeof id + ', ' + typeof name +", "),id,name);
}

multiplTypeVariables<number, string>(1, "Pushpendra kumar")


//generics with non generics type 

function displaytype<T>(id : T, name : string) : void{
    console.log(typeof id + ", " + typeof name)
}
displaytype<number>(2,"Kumar")

