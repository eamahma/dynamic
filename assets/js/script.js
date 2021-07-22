let myArray = ["apple", "orange", "grapes", "nectarin"];
const btnEl = document.createElement("button");

myArray.forEach(function(element, index){
    const divEl = document.createElement("div");
    divEl.setAttribute("id", index);
    divEl.setAttribute("class", "list");
    divEl.textContent = element;
    document.getElementById("info").appendChild(divEl);
});

btnEl.setAttribute("id", "clear");
btnEl.setAttribute("name", "Clear");
btnEl.textContent = "Clear";
document.getElementById("info").appendChild(btnEl);

let clearElements = function (parentId, classId) {
    console.log(parentId, classId);
    let container = document.getElementById(parentId);
    let elements = container.getElementsByClassName(classId);

    while(elements[0]){
        elements[0].parentNode.removeChild(elements[0]);
    }

};

document.getElementById("clear").onclick = function() {clearElements("info", "list")};                                                                                                      ;