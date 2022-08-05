export {}

// Inrerface describing objet 
  
interface Pair<T, U>{
    first : T;
    second: U;
}

let p : Pair<string , number> = {first : "10k" , second: 10};
let person : Pair<number , number> = {first : 5 , second: 10};

console.log(p);
console.log(person);


// second example 

interface Command<T, R>{
    id: T;
    run(): R;
}
let c : Command<string,number>= {
    id: Math.random().toString(36),
    run: function(){
        return 3;
    }
}

console.log(c.id);
console.log(c.run())
