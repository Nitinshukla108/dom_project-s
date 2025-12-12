let main = document.querySelector("main");
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");
let grow = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none"; // isse hum button sirf ek hi bar click kr skte hai

  let num = 30 + Math.floor(Math.random() * 50);

  let p = setInterval(() => {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
    btn.innerHTML = "Downloading...";
    btn.style.opacity = "0.8";
  }, num);

  setTimeout(function () {
    clearInterval(p);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = "0.5";

    let po = document.createElement("p");
    main.appendChild(po);
    po.innerHTML = `downloaded in ${num / 10} second`;
    po.style.fontSize = '15px';
    po.style.textAlign = 'center';
    po.style.textDecoration = 'underline';
    
    }, num * 100);


});


