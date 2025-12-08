
let main = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    
    let div = document.createElement('div');
    main.appendChild(div);

    let x = Math.random()*100;
    let y = Math.random()*100;
    let z = Math.random()*100;

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    div.style.height = '100px';
    div.style.width = '100px';
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.position = 'absolute';
    div.style.left = x+'%';
    div.style.top = y+'%';
    div.style.rotate = z+'deg';
})