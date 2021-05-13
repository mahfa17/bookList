const ul=document.querySelector('ul');
const bookName=document.querySelector('#add');
const approveButton=document.querySelector('#btn');
const hiden=document.querySelector('#hiden');
const search=document.querySelector('#search');
const delButton=`<button class="delete">حذف</button>`;


//جستجو در لیست
search.addEventListener('keyup',function(e){
    for(let book of ul.children){
        if(book.children[1].textContent.indexOf(search.value) !== -1){
            book.style.display='inlin-block';
        }else{
            book.style.display='none';
        }
    }
});

//اضافه کردن کتاب
approveButton.addEventListener('click' ,function(e){
    const span=document.createElement('span');
    span.textContent=bookName.value;

     //ساخت المنت
    const li=document.createElement('li');
    li.innerHTML += delButton;
    li.appendChild(span);
    ul.appendChild(li);

   //ذخیره کردن در مرورگر
    storeToLocalStorage(bookName.value);

    bookName.value='';
    e.preventDefault();
});



//دکمه حذف
ul.addEventListener('click',function(e){
    if(e.target.className==='delete'){
       e.target.parentElement.remove();
       //حذف از حافظه
       removeFromLocalStorage(e.target.parentElement.
        children[1].textContent);
    }
    
});




//مخفی کردن
hiden.addEventListener('click',function(e){
    if(hiden.checked){
        ul.style.display='none'
    }else{
        ul.style.display='initial'
    }
});



//لود کردن حافظه
document.addEventListener('DOMContentLoaded',function(e){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[]; 
    }else{
        tasks=localStorage.getItem('tasks').split(',');
    }

    for(let item of tasks){
        const span=document.createElement('span');
        span.textContent=item;
        const li=document.createElement('li');
        li.innerHTML += delButton;
        li.appendChild(span);
        ul.appendChild(li);
    }

});



//ذخیره کردن کتاب جدید در حافظه
function storeToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[]; 
    }else{
        tasks=localStorage.getItem('tasks').split(',');
    }

    tasks.push(task);
    localStorage.setItem('tasks',tasks);
}



//حذف از حافظه

function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[]; 
    }else{
        tasks=localStorage.getItem('tasks').split(',');
    }

    for(let i=0; i<tasks.length; i++){
        if(tasks[i]===task){
            tasks.splice(i,1);
        }
    }
   
    if(tasks.length ===0){
        localStorage.clear();
    }else{
        localStorage.setItem('tasks',tasks);
    }
}