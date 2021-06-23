/* .map() */
// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order

var numbers = [10, 20, 30, 40];
var newarray = numbers.map(i => myFunction(i))

function myFunction(num) {
    return num * 10;
}

console.log(newarray);

let kvArray = [
    {
        key: 1,
        value: 10
    },
    {
        key: 2,
        value: 20
    },
    {
        key: 3,
        value: 30
    },

];

console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let r0bj = {};
    r0bj[obj.key] = obj.value;
    console.log(r0bj);
})

