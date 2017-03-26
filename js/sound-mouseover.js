
function playclip() {
	var audio = document.getElementsByTagName("video")[0];
	audio.play();
}

function startGame() {
	var obj = document.getElementsByTagName("g");
	for (var i = 0; i < obj.length; i++) {
		var str = obj[i].id();
		if (str == "Var_Text") {
			obj.start();
		}
	}
}

function pauseclip() {
	var audio = document.getElementsByTagName("video")[0];
	audio.pause();
}
