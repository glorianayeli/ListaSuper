const listaSuper = document.querySelector('.ul-principal');
const doneButton = document.querySelector('.done-button');
const deleteButton = document.querySelector('.delete-button')
const addButton = document.querySelector('.add-button')
const element = document.querySelector('.element');
const productName = document.querySelector('.nameProduct');

addButton.addEventListener('click',addElement);
doneButton.addEventListener('click',doneElement);

let elementName;



function addElement(){
    newElement = document.createElement(listaSuper.after(element.cloneNode(true)));
    elementName = productName.value;
    listaSuper.appendChild(newElement);
    document.querySelector('.description').innerHTML = elementName;
}
function doneElement(){;
    element.innerHTML = "done";
}
