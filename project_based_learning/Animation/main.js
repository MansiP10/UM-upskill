document.addEventListener('DOMContentLoaded',function(){
    const h1 = document.querySelector('h1');

    h1.style.color = '#420202';
    setTimeout(()=>{
        setTimeout(()=>{
            h1.classList.add('glow');
        },500);
    },5000);
});