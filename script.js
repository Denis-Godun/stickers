const text = document.querySelector(".text");
const texrarea = document.querySelector(".textarea");
document.querySelector(".add_stick").onclick = () => {
 text.style.display = "block";
};

document.querySelector(".fa-circle-xmark").onclick = () => {
    text.style.display = "none";
   };
let colorise = () =>
{
   
let valueColor = colors[randomColor];
}


   let createdSticker = () => {
    let colors = ['red','blue','green','yellow','purple'];
    let randomColor = Math.floor(Math.random()*colors.length);
    let degs = ['-5deg','-4deg','-3deg','3deg','4deg','5deg'];
    let randomDeg = Math.floor(Math.random()*degs.length);
    let item = document.createElement("div");
    item.className = "item";
    item.style.background = colors[randomColor];
    item.style.rotate= degs[randomDeg];
    let content = document.createElement("h1");
    content.className = "content";
    content.textContent = texrarea.value;
    item.appendChild(content);
    document.querySelector(".container").appendChild(item);
   };

   text.addEventListener('keydown', function(event){
if(event.code == 'Enter'){
    createdSticker();
    texrarea.value = "";
}
   })