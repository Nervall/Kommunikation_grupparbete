let counter = 0;

let createButton = document.querySelector('#createList');
createButton.addEventListener('click', addList);

function addCard(list) {
    console.log(list);
    let ul = document.querySelector('#' + list);
    console.log(ul);
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
        document.querySelector('li');
        target.parentNode.remove(this);
}

function addList(e) {
    counter ++;
    let section = document.querySelector('section');
    let newList = document.createElement('div');
    newList.setAttribute('id', 'div' + counter);
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
    let addCardButton = document.createElement('button');
    h3.setAttribute('class', 'list-title');
    h3.setAttribute('contenteditable', 'true');
    ul.setAttribute('class', 'list-items');
    ul.setAttribute('id', 'list' + counter);
    //let ulList = document.querySelector('ul');
    addCardButton.setAttribute('class', 'add-card-btn btn');
    addCardButton.setAttribute('id', 'card' + counter);
    addCardButton.addEventListener('click', function() {
    addCard('list' + counter);
    });
    let addListButton = document.createElement('button');
    addListButton.setAttribute('class', 'add-list-btn');
    addListButton.setAttribute('id', 'listButton' + counter);
    addListButton.textContent = 'Lägg till en lista';
    addListButton.addEventListener('click', function() {
        section.removeChild(addListButton);
        addList();
    });
    
    //anonym funktion kalla på addcard, skicka med lista
    h3.textContent = 'En ny lista';
    addCardButton.textContent = '+ Lägg till ett kort';
    section.appendChild(newList);
    newList.appendChild(h3);
    newList.appendChild(ul);
    ul.appendChild(newItem);
    newItem.appendChild(textArea);
    newItem.appendChild(iElem);
    newList.appendChild(addCardButton); 
    section.appendChild(addListButton);
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
*/