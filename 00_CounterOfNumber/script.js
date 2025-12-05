
let h1 = document.querySelector('h1');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');
let reset = document.querySelector('#reset');


inc.innerHTML = 'click me for increment'
dec.innerHTML = 'click me for decrement'
reset.innerHTML = 'click me for reset the timer'




let p = 0;
inc.addEventListener('click',function(){
    p++
    h1.innerHTML = p;
})

dec.addEventListener('click',function(){
    p--
    h1.innerHTML = p;
})

reset.addEventListener('click',function(){
    p = 0;
    h1.innerHTML = p;
})