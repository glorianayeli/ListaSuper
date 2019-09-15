Items = document.querySelector('.items');
let lista = document.getElementById("lista-articulos");
let listIndex = 1;

function addItem() {
    let text = document.getElementById("input-producto").value;
    if (text === "") return;
    else {
        lista.innerHTML +=
            "<li class='list-group-item d-flex justify-content-between lh-condensed element' id='elemento" + listIndex + "'>" +
            "<div><h6 class='my-0 description'>" + text + "</h6></div>" +
            "<div class='btn-group' role='group'>" +
            "<button type='button' onclick='deleteItem(" + listIndex + ")' class='btn btn-secondary delete-button'>5</button>" +
            "<button type='button' onclick='doneItem(" + listIndex + ")' class='btn btn-secondary done-button'>D</button>" +
            "</div>" +
            "</li>";

        listIndex++
    }
    Items.textContent = listIndex - 1;
}

function deleteItem(index) {
    document.getElementById("elemento" + index).remove();
}

function doneItem(index) {
    let element = document.getElementById("elemento" + index);
    element.innerHTML = "<span>done<span>";
    element.classList.add("bg-success");
}
