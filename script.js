let counter = 0;
let listCounter = 0;
let iForward
let iBack;

let createButton = document.querySelector('#createList');
createButton.addEventListener('click', addList);

function addCard(list) {
    listCounter ++;
    let ul = list;
    let li = document.createElement('li');
    li.setAttribute('id', 'list-item' + listCounter);
    li.setAttribute('draggable', 'true');
    let textArea = document.createElement('textarea');
    textArea.setAttribute('class', '.list-items textarea');
    textArea.setAttribute('placeholder', 'Skriv din text här...');
    let iBack = document.createElement('i');
    iBack.setAttribute('class', 'material-icons')
    iBack.textContent = 'arrow_back';
    
    let iClear = document.createElement('i');
    iClear.setAttribute('class', 'material-icons');
    iClear.textContent = 'clear';
    iClear.addEventListener('click', removeCard);
    let iForward = document.createElement('i');
    iForward.setAttribute('class', 'material-icons')
    iForward.textContent = 'arrow_forward';
    iForward.addEventListener('click', function(e) {
        moveCard(e, ul, li, iForward, iBack);
        });
    iBack.addEventListener('click', function(e) {
        moveCard(e, ul, li, iForward, iBack);
        });
    li.appendChild(textArea);
    li.appendChild(iBack);
    li.appendChild(iClear);
    li.appendChild(iForward);
    ul.appendChild(li); 
} 


function removeCard(e){
    let target = e.target;
    document.querySelector('li');
    target.parentNode.remove(this);
}


function moveCard(e, ul, li, iForward, iBack) {
    let number = ul.id;
    let arr = number.split("");
    let parse = parseInt(arr[4]);
    let target = e.target;
    let newId = ''

    if (target === iForward) {
        parse ++;
        newId = '#list'+ parse;
    }
    if (target === iBack) {
        parse --;
        newId = '#list'+ parse;
    }

    let newParent = document.querySelector(newId);
    if (!newParent) {
        alert('there is no list to move this item, create a new List')
    } else {
    newParent.appendChild(li);
    }
   
}

var dragged;
  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "list-items" ) {
          event.target.style.background = "purple";
      }
  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "list-items" ) {
          event.target.style.background = "";
      }
  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "list-items" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
  }, false);

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
    li.setAttribute('id', 'list-item' + listCounter);
    li.setAttribute('draggable', 'true');
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
    let iBack = document.createElement('i');
    iBack.setAttribute('class', 'material-icons')
    iBack.textContent = 'arrow_back';
    iBack.addEventListener('click', function(e) {
        moveCard(e, ul, li, iForward, iBack);
        });
    iForward.addEventListener('click', function(e) {
        moveCard(e, ul, li, iForward, iBack);
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
    h3.textContent = 'En ny lista';
    addCardButton.textContent = '+ Lägg till ett kort';
    section.appendChild(newList);
    newList.appendChild(h3);
    newList.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(textArea);
    li.appendChild(iBack);
    li.appendChild(iClear);
    li.appendChild(iForward);
    newList.appendChild(addCardButton); 
    section.appendChild(addListButton);
}


/*

function moveCardForward(ul, li, iForward, iBack) {
    let number = ul.id;
    let arr = number.split("");
    let parse = parseInt(arr[4]);
    parse ++;
    number = 'list'+ parse;
    let newParent = document.querySelector('#' + number);
    if (newParent === null) {
        alert('there is no list to move this item, create a new List')
    } else {
    newParent.appendChild(li);
    iForward.addEventListener('click', function() {
        moveCardForward(newParent, li, iForward, iBack);
        });
    iBack.addEventListener('click', function() {
        moveCardBack(newParent, li, iBack, iForward);
        });
    }
}

function moveCardBack(ul, li, iBack, iForward) {
    let number = ul.id;
    let arr = number.split("");
    let parse = parseInt(arr[4]);
    parse --;
    number = 'list'+ parse;
    console.log(number);
    let newParent = document.querySelector('#' + number);
    if (newParent === null) {
        alert('there is no list to move this item, create a new List')
    } else {
    newParent.appendChild(li);
    iBack.addEventListener('click', function() {
        moveCardBack(newParent, li, iBack, iForward);
        });
    iForward.addEventListener('click', function() {
        moveCardForward(newParent, li, iForward, iBack);
        });
    }
}
*/