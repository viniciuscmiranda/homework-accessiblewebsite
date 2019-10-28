function rand(min , max){ return Math.floor(Math.random() * (max - min) + min); } 
document.getElementById("txtcaptcha").select();

var input = document.getElementsByTagName("label")[0];
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementsByTagName("label")[0].getElementsByTagName("input")[0].click();
    }
});

var input = document.getElementById("txtcaptcha");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("sendcaptcha").click();
    }
});

var awnser;
var operation = [" + ", " - "];
var captchavalue = new Array;
function captcha(){
	awnser = 0;
	while(awnser <= 0){
		captchavalue[0] = rand(1, 6);
		captchavalue[1] = rand(1, captchavalue[0]);

		var sortop = rand(0, operation.length);
		if(operation[sortop] == " + "){ awnser = captchavalue[0] + captchavalue[1];}
		else if(operation[sortop] == " - "){ awnser = captchavalue[0] - captchavalue[1];} 
	}

	document.getElementsByTagName("section")[0].getElementsByTagName("p")[0].innerHTML = captchavalue[0] + operation[sortop] + captchavalue[1];
}


function getcaptcha(value){
	if(value == awnser) window.location = "html/home.html";
	else{
		document.getElementById("nothuman").style.display = "initial";
		document.getElementById("recaptcha").click();
		document.getElementById("txtcaptcha").value = "";
		document.getElementById("txtcaptcha").select();
	}
}