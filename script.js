let counter = 0;
let listCounter = 0;

let createButton = document.querySelector('#createList');
createButton.addEventListener('click', addList);

function addCard(list) {
    listCounter ++;
    let ul = list;
    let li = document.createElement('li');
    li.setAttribute('id', 'list-item' + listCounter)
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...');
    let iClear = document.createElement('i');
    iClear.setAttribute('class', 'material-icons');
    iClear.textContent = 'clear';
    iClear.addEventListener('click', removeCard);
    let iForward = document.createElement('i');
    iForward.setAttribute('class', 'material-icons')
    iForward.textContent = 'arrow_forward';
    iForward.addEventListener('click', function() {
        moveCardForward(ul, li, iForward);
        });
    li.appendChild(textArea);
    li.appendChild(iClear);
    li.appendChild(iForward);
    ul.appendChild(li); 
} 

function removeCard(e){
    let target = e.target;
    document.querySelector('li');
    target.parentNode.remove(this);
}


function moveCardForward(ul, li, iForward) {
    let number = ul.id;
    let arr = number.split("");
    let parse = parseInt(arr[4]);
    parse ++;
    number = 'list'+ parse;
    console.log(iForward);
    console.log(li);
    let newParent = document.querySelector('#' + number);
    if (!newParent) {
        alert('there is no list to move this item, create a new List')
    } else {
    newParent.appendChild(li);
    iForward.addEventListener('click', function() {
        moveCardForward(newParent, li, iForward);
        });
    }
}


function addList(e) {
    counter ++;
    listCounter ++;
    let section = document.querySelector('section');
    let newList = document.createElement('div');
    newList.setAttribute('id', 'div' + counter);
    newList.setAttribute('class', 'list');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.setAttribute('id', 'list-item' + listCounter)
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...')
    let iClear = document.createElement('i');
    iClear.setAttribute('class', 'material-icons');
    iClear.textContent = 'clear';
    iClear.addEventListener('click', removeCard);
    let iForward = document.createElement('i');
    iForward.setAttribute('class', 'material-icons')
    iForward.textContent = 'arrow_forward';
    iForward.addEventListener('click', function() {
        moveCardForward(ul, li, iForward);
        });
    let addCardButton = document.createElement('button');
    h3.setAttribute('class', 'list-title');
    h3.setAttribute('contenteditable', 'true');
    ul.setAttribute('class', 'list-items');
    ul.setAttribute('id', 'list' + counter);
    //let ulList = document.querySelector('ul');
    addCardButton.setAttribute('class', 'add-card-btn btn');
    addCardButton.setAttribute('id', 'card' + counter);
    addCardButton.addEventListener('click', function() {
    addCard(ul);
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
    ul.appendChild(li);
    li.appendChild(textArea);
    li.appendChild(iClear);
    li.appendChild(iForward);
    newList.appendChild(addCardButton); 
    section.appendChild(addListButton);
}
