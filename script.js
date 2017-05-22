var nummer = 0;
function counter(){
	
    if (nummer == 100) {
        document.body.style.backgroundColor = "black";
        clearInterval(int);
    }else{
        document.getElementById('cirkel').innerHTML = ++nummer;
    }
}

var int = setInterval(counter, 30);
