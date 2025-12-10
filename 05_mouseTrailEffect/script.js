let h1 = document.querySelector("h1");
let main = document.querySelector("main");

main.addEventListener("mousemove", function () {
  let div = document.createElement('div');
  main.appendChild(div);

  let x = Math.random()*100;
  let y = Math.random()*100;

  div.style.height = "30px";
  div.style.width = "30px";
  div.style.borderRadius = '50%';
  div.style.border = '2px solid white';
  div.style.background = "black";
  div.style.position = 'absolute';
  div.style.top = x + '%';
  div.style.left = y + '%';
  div.style.boxShadow = "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff";
});
