const ul=document.querySelector('ul');
const bookName=document.querySelector('#add');
const approveButton=document.querySelector('#btn');
const hiden=document.querySelector('#hiden');

const delButton=`<button class="delete">حذف</button>`;

approveButton.addEventListener('click' ,function(e){
    const span=document.createElement('span');
    span.textContent=bookName.value;


    const li=document.createElement('li');
    li.innerHTML += delButton;
    li.appendChild(span);
    

    ul.appendChild(li);

    bookName.value='';
    e.preventDefault();
});


ul.addEventListener('click',function(e){
    if(e.target.className==='delete'){
       e.target.parentElement.remove();
    }
    
});

hiden.addEventListener('click',function(e){
    if(hiden.checked){
        ul.style.display='none'
    }else{
        ul.style.display='initial'
    }
})