let cardList = document.querySelector('#list1');
let cardButton = document.querySelector('#card1');
let listButton = document.querySelector('#addList');
let section = document.querySelector('section');
let counter = 1;

cardButton.addEventListener('click', addCard);
listButton.addEventListener('click', addList);

function addCard(e) {
    let newItem = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...')
    //newItem.setAttribute('contenteditable', 'true');
    //newItem.textContent = 'Skriv din text här...';
    newItem.appendChild(textArea);
    cardList.appendChild(newItem);
} 

function removeListItem(){
    //lst.removeChild(this.parentNode);
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
    //newItem.setAttribute('contenteditable', 'true');
    //newItem.textContent = 'Skriv din text här...';
    let button = document.createElement('button');
    newList.setAttribute('class', 'list');
    h3.setAttribute('class', 'list-title');
    ul.setAttribute('class', 'list-items');
    button.setAttribute('class', 'add-card-btn btn');
    button.setAttribute('id', 'card' + counter);
    h3.textContent = 'En ny lista';
    button.textContent = '+ Lägg till ett kort';
    section.insertBefore(newList, listButton);
    newList.appendChild(h3);
    newList.appendChild(ul);
    ul.appendChild(newItem);
    newItem.appendChild(textArea);
    newList.appendChild(button);

}



