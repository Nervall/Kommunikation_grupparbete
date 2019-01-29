let cardList = document.querySelector('#list1');
console.log(cardList);
//let parentId = document.querySelectorAll('.list-items');
let cardButton = document.querySelectorAll('.add-card-btn');
console.log(cardButton);
let listButton = document.querySelector('#addList');
let section = document.querySelector('section');
let deleteItem = document.querySelector('.material-icons');
let counter = 1;

if (cardButton === null) {
    cardButton = document.querySelector('.add-card-btn');
    cardButton.addEventListener('click', addCard)
} else {
    for (let i = 0; i < cardButton.length; i++) {
        cardButton[i].addEventListener('click', addCard);
    }
}

//cardButton.addEventListener('click', addCard);
listButton.addEventListener('click', addList);
deleteItem.addEventListener('click', removeListItem);

function addCard(e) {
    let newItem = document.createElement('li');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...');
    let i = document.createElement('i');
    i.setAttribute('class', 'material-icons');
    i.textContent = 'clear';
    newItem.appendChild(textArea);
    newItem.appendChild(i);
    cardList.appendChild(newItem);
} 

function testAddCard(parentId, elementId) {

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

function removeListItem(){
    cardList.removeChild(this.parentNode);
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
    let i = document.createElement('i');
    //iText = '<i class="material-icons">clear</i>';
    i.setAttribute('class', 'material-icons');
    i.textContent = 'clear';
    //i.innerHTML = iText;
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
    newItem.appendChild(i);
    newList.appendChild(button);
}

//<i class="material-icons" id="delete">clear</i>

/*
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

<form enctype="multipart/form-data" action="" method="post">
    <p>Upload file(s)</p>
    <div id="files">
        <p><input type="file" name="uploaded_file[]" /></p>
    </div>
    <p><input type="button" value="Add File" onclick="addFile();" /></p>
</form>

var fileId = 0; // used by the addFile() function to keep track of IDs
function addFile() {
    fileId++; // increment fileId to get a unique ID for the new element
    var html = '<input type="file" name="uploaded_files[]" /> ' +
               '<a href="" onclick="javascript:removeElement('file-' + fileId + ''); return false;">Remove</a>';
    addElement('files', 'p', 'file-' + fileId, html);
}



*/