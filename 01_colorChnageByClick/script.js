

let box = document.querySelector('#box');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    // apne kko rgb color ke liye 3 numbers chaiye hoge jisse rgb color bane 

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
})

// logic samjo hume ky krna tha ki box ke bg ka color chng krna tha and color kisse banta hai - rgb se aur uske liye number chaiye hume 3 toh humne phle vo 3 number generate kie by the help of Math.random and *256 isliye kia qki Math.random hamesa 0 to 1 hi value deta hai toh voh 255 tk number de islye humne usko 256 se multiple kia hai and floor se uski aage ki float value hattke normal value ban jayega 