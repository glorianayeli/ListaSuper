const listaSuper = document.querySelector('.ul-principal');
const doneButton = document.querySelector('.done-button');
const deleteButton = document.querySelector('.delete-button');
const addButton = document.querySelector('.add-button');
const element = document.querySelector('.element');
const productName = document.querySelector('.nameProduct');
const descriptionelement = document.querySelector('.description');

addButton.addEventListener('click',addElement);
doneButton.addEventListener('click',doneElement);
deleteButton.addEventListener('click',deleteElement);

let elementName;



function addElement(){
    elementName = productName.value;
    newElement = document.createElement(listaSuper.before(element.cloneNode()));
    
    listaSuper.appendChild(newElement);
    //document.querySelector('.description').innerHTML = elementName;
}
function doneElement(){
    element.innerHTML = "done";
}
function deleteElement(){
    deleteElement = document.querySelector('.element');
    deleteElement.remove();
}
