console.log("Hello Workd");
const myMessage = document.querySelector('.message');
console.log(myMessage); 
function myFunction(){
    myMessage.textContent = String(Math.floor(Math.random()*100));
}
