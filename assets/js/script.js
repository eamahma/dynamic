let myArray = ["apple", "orange", "grapes", "nectarin"];

myArray.forEach(function(element, index){
    const divEl = document.createElement("div");
    divEl.setAttribute("id", index);
    divEl.textContent = element;
    document.getElementById("info").appendChild(divEl);
});