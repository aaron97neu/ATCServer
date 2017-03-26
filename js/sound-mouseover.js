
function playclip() {
	var audio = document.getElementsByTagName("video")[0];
	audio.play();
}

function startGame() {
	var obj = document.getElementById("Var_Text");
	obj.start();
}

function pauseclip() {
	var audio = document.getElementsByTagName("video")[0];
	audio.pause();
}
