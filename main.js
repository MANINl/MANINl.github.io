
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
  

let button = document.querySelector("footer button");

let prompEvent= null;
window.addEventListener("beforeinstallprompt",(e)=>{
  console.log("lista para instalar");
  prompEvent = e;
  button.classList.add("active");
}
)
button.addEventListener("click", (e)=>{
  prompEvent.prompt();
})

