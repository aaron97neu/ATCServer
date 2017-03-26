
function playclip() {
	var audio = document.getElementsByTagName("video")[0];
	audio.play();
}

function startGame() {
	var obj = document.getElementsById("Var_Text")[0];
	obj.start();
}

function pauseclip() {
	var audio = document.getElementsByTagName("video")[0];
	audio.pause();
}
