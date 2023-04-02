var a = 10;
console.log(a);
// console.log(window.a);
// console.log(localStorage);
// console.log(sessionStorage);



var fs = require('fs');
fs.writeFile('demofile.txt', "some test content", function() {});


function test(){
    console.log(this); // this refers to a global object in nodejs
}
test();