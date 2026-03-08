async function ask() {

let q = document.getElementById("question").value;

if(!q) return;

let chat = document.getElementById("response");

// show user message
chat.innerHTML += "<div class='user'>"+q+"</div>";

// clear input
document.getElementById("question").value="";

// show thinking message
chat.innerHTML += "<div class='bot'>Thinking...</div>";

chat.scrollTop = chat.scrollHeight;

try{

let res = await fetch("https://agtn0m78v0.execute-api.us-east-1.amazonaws.com/ask",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({question:q})
});

let data = await res.json();

let messages = document.querySelectorAll(".bot");

// replace thinking with real response
messages[messages.length-1].innerHTML = data.reply || "No response from AI";

}catch(error){

let messages = document.querySelectorAll(".bot");
messages[messages.length-1].innerHTML = "Error connecting to AI service";

}

chat.scrollTop = chat.scrollHeight;

}

// send message with Enter key
document.getElementById("question").addEventListener("keypress",function(e){
if(e.key==="Enter"){
ask();
}
});
