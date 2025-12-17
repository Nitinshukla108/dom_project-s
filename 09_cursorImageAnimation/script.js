
let img = document.querySelector('img');

document.body.addEventListener('mousemove',function(dets){
    // console.log(dets.x);  by this we can know the where the mouse's location is
    // console.log(dets.y);
    
    img.style.left = dets.x + 'px';
    img.style.top = dets.y + 'px';

})