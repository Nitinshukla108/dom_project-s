
let teamNameWithInfo = [
    {
        team : "CSK",
        primary : "yellow",
        secondary : "black",
        cptName: "MSD"
    },
    {
        team : "RCB",
        primary : "red",
        secondary : "gold",
        cptName: "kohli"
    },
    {
        team : "MI",
        primary : "blue",
        secondary : "gold",
        cptName: "rohit"
    },
    {
        team : "DC",
        primary : "blue",
        secondary : "black",
        cptName: "Rahul"
    },
    {
        team : "kkr",
        primary : "purple",
        secondary : "gold",
        cptName: "gautam"
    },
    {
        team : "GT",
        primary : "lightblue",
        secondary : "black",
        cptName: "Hardik"
    }
]


let box = document.querySelector('#box');
let btn = document.querySelector('#btn');
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let main = document.querySelector('main')


btn.addEventListener('click',function(){
    let teamNumber = Math.floor(Math.random()*teamNameWithInfo.length);
    
    h1.innerHTML = teamNameWithInfo[teamNumber].team;
    h2.innerHTML = teamNameWithInfo[teamNumber].cptName;
    box.style.backgroundColor = teamNameWithInfo[teamNumber].secondary;
    main.style.backgroundColor = teamNameWithInfo[teamNumber].primary;
})