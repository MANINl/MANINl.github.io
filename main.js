
navigator.serviceWorker.register("/sw.js");

let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  

let button1 = document.querySelector("footer button");
let button2 = document.querySelector("div div div div button");


let prompEvent= null;
window.addEventListener("beforeinstallprompt",(e)=>{
  prompEvent = e;
  button1.classList.add("active");
  button2.classList.add("active");
}
)
button1.addEventListener("click", (e)=>{
  prompEvent.prompt();
})
button2.addEventListener("click", (e)=>{
  prompEvent.prompt();
})

