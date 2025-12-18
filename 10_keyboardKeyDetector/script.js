
let box = document.querySelector('#box');
let h1 = document.querySelector('h1');

document.body.addEventListener('keydown',function(dets){
    // console.log(dets.code);  isse ky hoga ki hume pata chlta hai ki konsa key press hua hai body me 

    h1.innerHTML = dets.code;
    
})