export {}
// create interface function type

interface ElementCheker{
    <T>(items:T[], toBeChecked:T, atIndex: number): boolean;
}
function checkElemntAt<T>(items:T[],toBeChecked: T,atIndex: number): boolean{
    return items[atIndex] == toBeChecked
}
let checker : ElementCheker = checkElemntAt;
let items = [1,3,5,7]
let b: boolean = checker<number>(items,3,1)
console.log(b)

// second example

interface States<R>{
    [state : string]: R;
}
let s : States<boolean> = {enabled : true,maximized: false};
console.log(s);
console.log(s['maximized'])