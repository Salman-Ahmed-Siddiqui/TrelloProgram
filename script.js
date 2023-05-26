function moveCard(card) {
  var list = card.parentNode;
  var newList = list.nextElementSibling;
  if (!newList) {
    newList = list.previousElementSibling;
  }
 
  newList.appendChild(card);
}



// var dragCard;

//     function allowDrop(event) {
//       event.preventDefault();
//     }

//     function drag(event) {
//       dragCard = event.target;
//       event.dataTransfer.setData('text/plain', null); // Store card data for visibility during drag
//     }

//     function drop(event) {
//       event.preventDefault();
//       var list = event.target.parentNode;
//       var newList = list;
//       var card = document.getElementById(event.dataTransfer.getData("text/plain"));
//       if (card && newList !== card.parentNode) {
//         newList.appendChild(card);
//         updateCardStatus(card, newList);
//       }
//     }

//     function moveCard(card) {
//       var list = card.parentNode;
//       var currentStatus = card.getAttribute('data-status');
//       if (currentStatus === 'todo') {
//         var inProgressList = document.querySelector('.list:nth-child(2)');
//         inProgressList.appendChild(card);
//         updateCardStatus(card, inProgressList);
//       } else if (currentStatus === 'inprogress') {
//         var todoList = document.querySelector('.list:first-child');
//         todoList.appendChild(card);
//         updateCardStatus(card, todoList);
//       } else if (currentStatus === 'done') {
//         var inProgressList = document.querySelector('.list:nth-child(2)');
//         inProgressList.appendChild(card);
//         updateCardStatus(card, inProgressList);
//       }
//     }

//     function updateCardStatus(card, list) {
//       var status = list.querySelector('.list-title').textContent.toLowerCase();
//       card.setAttribute('data-status', status);
//     }