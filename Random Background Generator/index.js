
const colors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const colornormal = ["red", "blue", "green", "yellow" ,"cyan", "magenta", "black"];

var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    var getRandom = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colornormal[getRandom];
    var text = document.getElementById('code');
    text.textContent = "Color Code : "+ colornormal[getRandom].toUpperCase();
},false);

var color;
var btn = document.getElementById('btn-ran');
btn.addEventListener('click',function(){
    color = "#";
    for(var i = 0; i < 6; i++){
        var getRandom = Math.floor(Math.random() * colors.length);
        color +=colors[getRandom];
    }
    document.body.style.backgroundColor = color;
    var text = document.getElementById('code');
    text.textContent = "Color Code : "+ color.toUpperCase();
},false);