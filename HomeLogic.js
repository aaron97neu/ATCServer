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

//var homeSVG = Snap(document.getElementById("Home"));
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
                    //display new screen
                    alert("Hi");
                }, false);
            }, false);
            startC2C();
    }, false);
    startC2C();
}, false);

console.log(textBox1);
console.log(textBox2);
console.log(textBox3);