let counter = 1;

let cardList = document.querySelector('#list'+counter);

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



function addCard(e) {
    //let target = e.target
    let list = e.target.id;
    let ul;
    if (list === 'card'+counter) {
        ul = '#list'+counter;
    }
    console.log(ul);
    //console.log(list);
    /*
    let ul = document.querySelectorAll('ul')
    for (let i = 0; i < ul.length; i++) {
        ul[i].getAttribute('id');
    }
    */
    ul= document.querySelector('#list'+counter);
    let li = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...');
    let iElem = document.createElement('i');
    iElem.setAttribute('class', 'material-icons');
    iElem.textContent = 'clear';
    iElem.addEventListener('click', removeCard);
    li.appendChild(textArea);
    li.appendChild(iElem);
    ul.appendChild(li);
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
    newList.setAttribute('id', 'list' + counter);
    newList.setAttribute('class', 'list');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let newItem = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...')
    let iElem = document.createElement('i');
    iElem.setAttribute('class', 'material-icons');
    iElem.textContent = 'clear';
    iElem.addEventListener('click', removeCard);
    let button = document.createElement('button');
    h3.setAttribute('class', 'list-title');
    h3.setAttribute('contenteditable', 'true');
    ul.setAttribute('class', 'list-items');
    ul.setAttribute('id', 'list' + counter);
    button.setAttribute('class', 'add-card-btn btn');
    button.setAttribute('id', 'card' + counter);
    button.addEventListener('click', addCard);
    h3.textContent = 'En ny lista';
    button.textContent = '+ Lägg till ett kort';
    section.insertBefore(newList, listButton);
    newList.appendChild(h3);
    newList.appendChild(ul);
    ul.appendChild(newItem);
    newItem.appendChild(textArea);
    newItem.appendChild(iElem);
    newList.appendChild(button); 
    return ul;
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