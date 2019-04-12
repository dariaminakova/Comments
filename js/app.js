M.AutoInit();

// COMMENTS SECTION

const btnSubmit = document.querySelector('button[type="submit"]');
const addMessage = document.querySelector('#textarea2');
const commentList = document.querySelector('.comment-list-all');
let commentCount = document.querySelector('.comments-counter');

btnSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    let newLi = document.createElement('li');
    newLi.classList.add('comment-style');
    newLi.innerHTML = `<div class="comment-box"><span class="name-user">Имя пользователя</span><span class="date">Дата сообщения</span></div><div class="message-text">${addMessage.value}</div>`;
 
    commentList.appendChild(newLi);

    addMessage.value = '';
    commentCount.textContent = commentList.children.length || 0;
 });

 function SendComment(e) {
    e = e || window.event;
    if (e.keyCode == 13 && e.ctrlKey) {
        let newLi = document.createElement('li');
    newLi.classList.add('comment-style');
    newLi.innerHTML = `<div class="comment-box"><span class="name-user">Имя пользователя</span><span class="date">Дата сообщения</span></div><div class="message-text">${addMessage.value}</div>`;
 
    commentList.appendChild(newLi);

    addMessage.value = '';
    commentCount.textContent = commentList.children.length || 0;
    };
};

//  Show All VS. Show Last

const lastComments = document.querySelector('#last');
let lastList = document.querySelector('#test1');

lastComments.addEventListener('click', showLast);

function showLast(){
    lastList.appendChild(commentList);
}

const allComments = document.querySelector('#all');
let allList = document.querySelector('#test2');

allComments.addEventListener('click', showAll);

function showAll(){
    allList.appendChild(commentList);
}

// -----------------------------------------------------------------

//  Service counter

let counter = document.querySelectorAll('.service-counter');
let total = document.querySelector('.total-service');
let sum = 0;

for (let i = 0; i<counter.length; i++){
    sum += +counter[i].innerHTML;
}

total.innerHTML = sum;

// Like btn counter

let likeBtn = document.querySelector('.like-btn');

likeBtn.addEventListener('click', addLike);

function addLike(){
    likeBtn.innerHTML++;
}




