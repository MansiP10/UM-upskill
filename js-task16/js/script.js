const boxes = document.querySelectorAll('.box');
const name = document.querySelector('#greet-text');
const gbutton = document.querySelector('.greet-btn');

gbutton.addEventListener("click",()=>{
    if(name.value !=''){
        document.getElementById('greeting').innerHTML = "Hello, "+name.value;
    }
});


boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        box.style.backgroundColor = e.target.dataset.value;
        if(e.target.dataset.value =='yellow'){
            box.style.color = '#000000';
        }
        else{
            box.style.color = '#FFFFFF';
        }
    } );
});