
				var time;
				var i = 0;
				var x = 0;
				var y = 0;
				var numsAdded = 0;
				var currentPlane = "M9";
				var incomingList = [{name: "M9", message: "M9 is seeking clearance to land!", land: true}]
				
				function start() {
					time = setInterval(update, 1000);
				}
				
				var takeOffList = [];
				var landList = [];
				for(j = 0; j < incomingList.length; j++) {
					document.getElementById("Incoming"+j).innerHTML = incomingList[j].name;
				}
				var names = ["Delta", "American", "United", "JetBlue", "Southwest", "Frontier", "Hack", "Alaska", "Spirit"];
			
				function addPlane() {
					if(incomingList.length < 10) {
						var name = names[Math.floor(Math.random() * names.length)];
						name += " " +(Math.floor(Math.random()*999)+1);
						var rand = (Math.floor(Math.random()*2))
						var message;
						var land;
						if(rand == 0) {
							message = name + " is seeking clearance to land!";
							land = true;
						}
						else {
							message = name + " is seeking clearance to take off!";
							land = false;
						}
						if(incomingList.length == 0) {
							document.getElementById("CurrentPlane").innerHTML = name;
						}
							
						incomingList.push({name: name, message: message, land: land});
						document.getElementById("Incoming"+(incomingList.length-1)).innerHTML = name;
						document.getElementById("Message"+(incomingList.length-1)).innerHTML = message;
					} else {
						lose();
					}
				}

				addPlane();

				function lose() {
					clearInterval(time);
					for(var c = 0; c < incomingList.length; c++) {
						document.getElementById("Incoming"+c).innerHTML = "";
						document.getElementById("Message"+c).innerHTML = "";
					}
					document.getElementById("GameOver").innerHTML = "<tspan x=\"0\" y=\"0\" class=\"st11 st12\">Game Over! </tspan><tspan x=\"-119.9\" y=\"30.8\" class=\"st11 st12\">Too many planes needed direction</tspan>";
					
				}

				function update()
				{
					var num = (Math.floor(Math.random()*100))
					if(num <= 35) {
						addPlane();	
					}
					num = (Math.floor(Math.random()*100));
					if(num <= 25 && takeOffList.length > 0) {
						takeoff();
					}
					num = (Math.floor(Math.random()*100))
					if(num <= 25 && landList.length > 0) {
						land();
					}
				}
				
				function takeoff() {
					if(takeOffList.length == 2) {
						takeOffList.splice(0, 1);
						document.getElementById("TakeOff0").innerHTML = takeOffList[0].name;
						document.getElementById("TakeOff1").innerHTML = "";
						x=1;
					} else {
						takeOffList.splice(0, 1);
						document.getElementById("TakeOff0").innerHTML = "";
						x=0
					}
				}
				function land() {
					if(landList.length == 2) {
						landList.splice(0, 1);
						document.getElementById("Land0").innerHTML = landList[0].name
						document.getElementById("Land1").innerHTML = "";
						y = 1;
					} else {
						console.log(landList.length);
						landList.splice(0, 1);
						document.getElementById("Land0").innerHTML = "";
						y = 0;
					}
				}
				function clearTakeOff() { 
				if(incomingList.length != 0) {
					if(incomingList[i].land == false) {
						if(x < 2) {
								var k = i;
								for(; k < incomingList.length-1; k++) {
									document.getElementById("Incoming"+k).innerHTML = incomingList[k+1].name;
									document.getElementById("Message"+k).innerHTML = incomingList[k+1].message;
								}
								document.getElementById("Message"+k).innerHTML = "";
								document.getElementById("Incoming"+k).innerHTML = "";
								var takeoff = incomingList.splice(i, 1);
								if(i == incomingList.length) {
									if(i != 0) {
										document.getElementById("CurrentPlane").innerHTML = incomingList[i-1].name;
										i--;
									}
									else
										document.getElementById("CurrentPlane").innerHTML = "";
								}
								else
									document.getElementById("CurrentPlane").innerHTML = incomingList[i].name;
									

								console.log(takeoff);
								document.getElementById("TakeOff"+x).innerHTML = takeoff[0].name;
								takeOffList.push(takeoff[0]);
								x++;
						} else {
							document.getElementById("Error").innerHTML = "All runways for takeoff are in use!";
						}
					} else {
						document.getElementById("Error").innerHTML = "This plane does not need to take off!";
					}
				} else {
					document.getElementById("Error").innerHTML = "You do not have a plane selected!";
				}
					
				}
				function clearLanding() { 
				if(incomingList.length != 0) {
					if(incomingList[i].land == true) {
						if(y < 2) {
								var k = i;
								for(; k < incomingList.length-1; k++) {
									document.getElementById("Incoming"+k).innerHTML = incomingList[k+1].name;
									document.getElementById("Message"+k).innerHTML = incomingList[k+1].message;
								}
								
								document.getElementById("Message"+k).innerHTML = "";
								document.getElementById("Incoming"+k).innerHTML = "";
								var landing = incomingList.splice(i, 1);
								if(i == incomingList.length) {
									if(i != 0) {
										document.getElementById("CurrentPlane").innerHTML = incomingList[i-1].name;
										i--;
									}
									else
										document.getElementById("CurrentPlane").innerHTML = "";
								}
								else
									document.getElementById("CurrentPlane").innerHTML = incomingList[i].name;

								document.getElementById("Land"+y).innerHTML = landing[0].name;
								landList.push(landing[0]);
								y++;
						} else {
							document.getElementById("Error").innerHTML = "All runways for landing are in use!";
						}
					} else {
						document.getElementById("Error").innerHTML = "This plane does not need to take off!";
					}
					} else {
						document.getElementById("Error").innerHTML = "You do not have a plane selected!";
					}
				}
				function nextPlane() { 
					console.log('Next plane');
					if(i == incomingList.length-1)
						i = 0;
					else
						i++;
					currentPlane = incomingList[i];
					document.getElementById("CurrentPlane").innerHTML = incomingList[i].name;
				}
                        
var animateC2C = false;
var clickToContinue = $("#Click_to_Continue");

function flashC2C()
{
     //clickToContinue.attr("opacity", "0");
     jQuery('#Click_to_Continue').css('opacity', '0');
     if(animateC2C == true)
     {
        clickToContinue.fadeTo( "slow" , 1.0, function() {
        // Animation complete.
             hideC2C();     
        });
     }
}
function hideC2C()
{
    if(animateC2C == true)
     {
        //clickToContinue.attr("opacity", 1);
        jQuery('#Click_to_Continue').css('opacity', '1');
        clickToContinue.fadeTo( "slow" , 0.0, function() {
        // Animation complete.
             flashC2C();     
        });
     } else
     {
        //clickToContinue.attr("opacity", "0");
        jQuery('#Click_to_Continue').css('opacity', '0');
     }
}

//Starts click to continue flashing
function startC2C(){
    animateC2C = true;
    flashC2C();
}

function stopC2C()
{
    jQuery('#Click_to_Continue').css('opacity', '0');
    animateC2C = false;
    hideC2C();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var homeSVG = document.getElementById("Home");
var gameSVG = document.getElementById("Game_Group");
gameSVG.setAttribute("visibility", "hidden");
var textBoxes = document.querySelectorAll('.TextBox');
var textBox1 = textBoxes[0];
var textBox2 = textBoxes[1];
var textBox3 = textBoxes[2];
textBox1.setAttribute("visibility", "visible");
textBox2.setAttribute("visibility", "hidden");
textBox3.setAttribute("visibility", "hidden");
jQuery('#Click_to_Continue').css('opacity', '0');
startC2C();

textBox1.addEventListener('click', async function() //start listening to clicks on Text Box 1
{
    stopC2C();
    textBox1.setAttribute("visibility", "hidden");
    textBox2.setAttribute("visibility", "visible");
    textBox3.setAttribute("visibility", "hidden");
    //animate text
    await sleep(3000);
    textBox2.addEventListener('click', async function() //start listening to clicks on Text Box 2
    { 
            stopC2C();
            textBox1.setAttribute("visibility", "hidden");
            textBox2.setAttribute("visibility", "hidden");
            textBox3.setAttribute("visibility", "visible");
            await sleep(3000);
            textBox3.addEventListener('click', function() //start listening to clicks on Text Box 3
            { 
                stopC2C();
                textBox1.setAttribute("visibility", "hidden");
                textBox2.setAttribute("visibility", "hidden");
                textBox3.setAttribute("visibility", "hidden");
                document.querySelectorAll('#Guide')[0].setAttribute("visibility", "hidden");
                document.querySelector('#Screen_1').addEventListener('click', function() //start listening to clicks on Screen 1
                { 
                    start();
                    //display new screen
                    gameSVG.setAttribute("visibility", "visible");
                }, false);
            }, false);
            startC2C();
    }, false);
    startC2C();
}, false);

console.log(textBox1);
console.log(textBox2);
console.log(textBox3);