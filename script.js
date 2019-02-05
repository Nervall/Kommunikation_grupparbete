let cardList = document.querySelector('#list1');

let listButton = document.querySelector('#addList');
let section = document.querySelector('section');

listButton.addEventListener('click', addList);

let cardButton = document.querySelectorAll('.add-card-btn');
for (let i = 0; i < cardButton.length; i++) {
    cardButton[i].addEventListener('click', addCard);
}

let deleteItem = document.querySelectorAll('.material-icons');
for (let i = 0; i < deleteItem.length; i++) {
    deleteItem[i].addEventListener('click', removeCard, false);
}

let counter = 1;

function addCard(e) {
    let target = e.target
    console.log(target);
    let newItem = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...');
    let iElem = document.createElement('i');
    iElem.setAttribute('class', 'material-icons');
    iElem.textContent = 'clear';
    iElem.addEventListener('click', removeCard);
    newItem.appendChild(textArea);
    newItem.appendChild(iElem);
    cardList.appendChild(newItem);
} 

function removeCard(e){
    let target = e.target;
    let li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        target.parentNode.remove(this);
    }
}

function addList(e) {
    counter ++;
    let newList = document.createElement('div');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let newItem = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...')
    let iElem = document.createElement('ielem');
    //iText = '<i class="material-icons">clear</i>';
    iElem.setAttribute('class', 'material-icons');
    iElem.textContent = 'clear';
    iElem.addEventListener('click', removeCard);
    //i.innerHTML = iText;
    //newItem.setAttribute('contenteditable', 'true');
    //newItem.textContent = 'Skriv din text här...';
    let button = document.createElement('button');
    newList.setAttribute('class', 'list');
    h3.setAttribute('class', 'list-title');
    h3.setAttribute('contenteditable', 'true');
    ul.setAttribute('class', 'list-items');
    button.setAttribute('class', 'add-card-btn btn');
    button.setAttribute('id', 'card' + counter);
    button.addEventListener('click', addCard);
    h3.textContent = 'En ny lista';
    button.textContent = '+ Lägg till ett kort';
    section.insertBefore(newList, listButton);
    newList.appendChild(h3);
    newList.appendChild(ul);
    ul.appendChild(newItem);
    newList.appendChild(button); 
}

/*
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}
>>>>>>> develop_jim

*/