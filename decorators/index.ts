export { }
function log(title: string) {
    //decorator factory function will return decorator function then needs argument bellow
    return function (target, key, descriptor?) {
        //console.log(target)
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            // call the original metthod
            const result = original.apply(this, args);
            // log the call and the result 
            console.log(`title : ${title} ${key} with args ${JSON.stringify(args)} returned 
            ${JSON.stringify(result)} `);
            // return the result
        };
        return descriptor;

    }
    // //console.log(target)
    // const original = descriptor.value;
    // descriptor.value = function(...args: any[]){
    //     // call the original metthod
    //     const result= original.apply(this,args);
    //     // log the call and the result 
    //     console.log(`${key} with args ${JSON.stringify(args)} returned 
    //           ${JSON.stringify(result)} `);
    //     // return the result
    // };
    // return descriptor;
};
class Calculator {
    // Using the decorator @log
    // @factory decorators below use
    @log('Calculator')
    square(n: number) {
        return n * n
    }
}
const cal = new Calculator();
// square with args [2] returned 4
cal.square(2);
// square with args [3] returned 9
cal.square(3);
