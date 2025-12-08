
const jsQuotes = [
  "JavaScript makes ideas alive.",
  "Think less, code more.",
  "Small scripts, big impact.",
  "Bug today, skill tomorrow.",
  "JS: Learn by doing.",
  "Logic is the real syntax.",
  "Code smart, not long.",
  "JS grows with practice.",
  "Errors teach the best.",
  "One line can change everything.",
  "JS is logic in motion.",
  "Code it, test it, trust it.",
  "JavaScript never stops evolving.",
  "Short code, sharp mind.",
  "JS: Where magic meets logic.",
  "Async today, smooth tomorrow.",
  "Practice is the real framework.",
  "Every bug improves you.",
  "JS starts simple, ends powerful.",
  "Create more, worry less."
];


let btn = document.querySelector('button');
let main = document.querySelector('main');

btn.addEventListener('click',function(){
    let h1 = document.createElement('h1');
    main.appendChild(h1);

    let a = Math.floor(Math.random()*jsQuotes.length);
    h1.innerHTML = jsQuotes[a];

    let x = Math.random()*100;
    let y = Math.random()*100;
    let z = Math.random()*100;
    let scale = Math.random()*3;

    h1.style.position = 'absolute';
    h1.style.top = x + '%';
    h1.style.left = y + '%';
    h1.style.rotate = z + 'deg';
    h1.style.scale = scale;
    
})