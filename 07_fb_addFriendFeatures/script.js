let card = document.querySelector('#card')
let h5 = document.querySelector('h5');
let h3 = document.querySelector('h3');
let btn = document.querySelector('#add');
let flag = 0;

btn.addEventListener('click',function(){
    if(flag == 0){
        h5.innerHTML = 'Friends';
        h5.style.color = 'green';
        btn.innerHTML = 'Remove friend';
       
        flag = 1;
    }
    else{
        
        h5.innerHTML = 'Stranger';
        h5.style.color = 'red';
        btn.innerHTML = 'Add Friend';
       
        flag = 0;
    }
})

