// this code is doing same as script.js, but using jQuerry
let myArray = ["apple", "orange", "grapes", "nectarin"];

myArray.forEach(function(element, index){
    const boxEl = $(`<div class="box" id=${index}>${element}</div>`);
    $("#info").append(boxEl);

});