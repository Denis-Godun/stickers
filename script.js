const text = document.querySelector(".text");
const texrarea = document.querySelector(".textarea");


let colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
let degs = ['rotate(-5deg)','rotate(-4deg)','rotate(-3deg)','rotate(3deg)','rotate(4deg)','rotate(5deg)'];
let margin = ["-5px","-3px","3px","-7px"];


document.querySelector(".add_stick").onclick = () => {
 text.style.display = "block";
};
let index = 0;

document.querySelector(".fa-circle-xmark").onclick = () => {
    text.style.display = "none";
   };


   let createdSticker = () => {
    if(index > colors.length-1){
      index = 0;
    }
    let item = document.createElement("div");
    item.className = "item";
    item.setAttribute("style", `transform:${degs[Math.floor(Math.random()*degs.length)]};
    background-color:${colors[index++]};margin:${margin[Math.floor(Math.random()*margin.length)]}`)
    let content = document.createElement("h2");
    content.className = "content";
    content.textContent = texrarea.value;
    item.appendChild(content);
    document.querySelector(".container").appendChild(item);
    item.ondblclick = () => {
item.remove();
    };
   };

   text.addEventListener('keydown', function(event){
if(event.code == 'Enter'){
    createdSticker();
    texrarea.value = "";
}
   })