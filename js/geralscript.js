var input = document.getElementById("darkmode");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("darkmode").getElementsByTagName("input")[0].click();
    }
});

document.getElementById("fontslider").getElementsByTagName("input")[0].value = localStorage.getItem("size");
document.getElementsByTagName("main")[0].style.fontSize = localStorage.getItem("size") + 'px';

var colorid = 1;
if(localStorage.getItem("colorid") != null) colorid = localStorage.getItem("colorid");
var bgcolor = ["#111", "white"];
function darkmode(){
	document.getElementsByTagName("body")[0].style.backgroundColor = bgcolor[colorid];
	document.getElementsByTagName("main")[0].style.color = bgcolor[colorid - (colorid * 2) + 1];
	if(colorid==0){
		document.getElementById("darkmode").getElementsByClassName("fa fa-sun-o")[0].style.display = "none";
		document.getElementById("darkmode").getElementsByClassName("fa fa-moon-o")[0].style.display = "initial";
		colorid=1;
	} else{
		document.getElementById("darkmode").getElementsByClassName("fa fa-sun-o")[0].style.display = "initial";
		document.getElementById("darkmode").getElementsByClassName("fa fa-moon-o")[0].style.display = "none";
		colorid=0;
	}
	localStorage.setItem("colorid", colorid - (colorid * 2) + 1);
}

function fontsize(size){
	document.getElementsByTagName("main")[0].style.fontSize = size + 'px';
	localStorage.setItem("size", size);
}