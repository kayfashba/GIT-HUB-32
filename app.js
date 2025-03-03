let body = document.querySelector("body")
let button  = document.querySelector("#darklight")
body.classList.add('light-mode')

let button3 = () => {
if(body.classList.contains("light-mode")){
    body.classList.replace("light-mode", "dark-mode")
    button.textContent = "🌙"
}else {
    body.classList.contains("dark-mode")
    body.classList.replace("dark-mode", "light-mode")
    button.textContent = "🌞"
  }
}