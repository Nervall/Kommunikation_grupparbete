let counter = 0;
let listCounter = 0;
let iForward
let iBack;


let createButton = document.querySelector('#createList');
createButton.addEventListener('click', (e) => {
    addList(e);
});

let dragged;

document.addEventListener("drag", function (event) {
    event.target.style.border = "1px dashed grey"
}, false);

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    event.target.style = "";
}, false);

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (event.target.className === "list-items") {
        event.target.style.background = "lightgrey";
    }
}, false);

document.addEventListener("dragleave", function (event) {
    if (event.target.className === "list-items") {
        event.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className === "list-items") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);

function addList(e) {
    counter++;
    listCounter++;
    let section = document.querySelector('section');
    let newList = document.createElement('div');
    newList.setAttribute('id', 'div' + counter);
    newList.setAttribute('class', 'list');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.setAttribute('id', 'list-item' + listCounter);
    li.setAttribute('draggable', 'true');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...')
    let iClear = document.createElement('i');
    iClear.setAttribute('class', 'material-icons');
    iClear.textContent = 'clear';
    iClear.addEventListener('click', () => {
        li.remove();
    });

    let timedatecard = document.createElement("p");
    let now = new Date();
    timedatecard.innerHTML = now.toLocaleString('sv-SE');
    timedatecard.setAttribute('class', 'timetagcard');

    let addCardButton = document.createElement('button');
    h3.setAttribute('class', 'list-title');
    h3.setAttribute('contenteditable', 'true');
    ul.setAttribute('class', 'list-items');
    ul.setAttribute('id', 'list' + counter);
    addCardButton.setAttribute('class', 'add-card-btn btn');
    addCardButton.setAttribute('id', 'card' + counter);
    addCardButton.addEventListener('click', function (e) {

        let section = document.querySelector('section');
        const container = document.createElement("div");
        const title = document.createElement("h3");
        title.innerHTML = 'Create new card'
        const div = document.createElement("div");
        div.setAttribute('class', 'popup');
        div.appendChild(title);
        const button = document.createElement("button");
        button.innerHTML = 'Add new item'
        let textArea = document.createElement('textarea');
        textArea.setAttribute('class', 'textpop');
        textArea.setAttribute('placeholder', 'Skriv din text här...');
        section.appendChild(container);
        container.setAttribute('class', 'overlay');
        container.appendChild(div);
        div.appendChild(textArea);
        div.appendChild(button);

        container.style.display = 'flex';
        div.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        button.addEventListener('click', () => {
            const value = textArea.value;
            if (!value) {
                alert('please enter a value')
            } else {
                addCard(ul, value);
                div.remove();
                container.style.display = 'none';
            }
        })

        textArea.addEventListener('keypress', (key) => {
            if (key.code === 'Enter') {
                const value = textArea.value;
                if (!value) {
                    alert('please enter a value')
                } else {
                    addCard(ul, value);
                    div.remove();
                    container.style.display = 'none';
                }
            }
        });

        container.addEventListener('click', (e) => {
            div.remove();
            container.style.display = 'none';
        });

    });
    let addListButton = document.createElement('button');
    addListButton.setAttribute('class', 'add-list-btn');
    addListButton.setAttribute('id', 'listButton' + counter);
    addListButton.textContent = 'Lägg till en lista';
    addListButton.addEventListener('click', function () {
        section.removeChild(addListButton);
        addList();
    });
    const licontainer = document.createElement("div");
    licontainer.setAttribute('class', 'licontainer');
    h3.textContent = 'En ny lista';
    addCardButton.textContent = '+ Lägg till ett kort';
    section.appendChild(newList);
    newList.appendChild(h3);
    newList.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(textArea);
    li.appendChild(licontainer);
    licontainer.appendChild(iClear);
    licontainer.appendChild(timedatecard);
    newList.appendChild(addCardButton);
    section.appendChild(addListButton);
}

function addCard(list, value) {
    listCounter++;
    let ul = list;
    let li = document.createElement('li');
    li.setAttribute('id', 'list-item' + listCounter);
    li.setAttribute('draggable', 'true');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...');
    let iClear = document.createElement('i');
    iClear.setAttribute('class', 'material-icons');
    iClear.textContent = 'clear';
    iClear.addEventListener('click', () => {
        li.remove();
    });

    let timedatecard = document.createElement("p");
    let now = new Date();
    timedatecard.innerHTML = now.toLocaleString('sv-SE');
    timedatecard.setAttribute('class', 'timetagcard');

    const licontainer = document.createElement("div");
    licontainer.setAttribute('class', 'licontainer');

    textArea.value = value;
    li.appendChild(textArea);
    li.appendChild(licontainer);
    licontainer.appendChild(iClear);
    licontainer.appendChild(timedatecard);
    ul.appendChild(li);
} 
