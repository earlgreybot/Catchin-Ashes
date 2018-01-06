
//wait function from stackoverflow user Mic http://stackoverflow.com/questions/14226803/javascript-wait-5-seconds-before-executing-next-line
//this function is here because I was using it to space out the loading screen it seems to run first when called upon within a function and I am unsure as to why
//I'm keeping it here for the moment as I might use it later.
function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
		end = new Date().getTime();
	}
}

var waitcounter = 0;

//this function is called upon when the user clicks the music link to change the DMG display to the word 'loading' and then to redirect them to catchinashes soundcloud.
//in future I'd like to add a short animated loading sequence. 

function loadingscreen() {	
	if (waitcounter == 0){
			document.getElementById('screencontent').innerHTML = "<h2 id='loading'> Loading </h2>";
			waitcounter ++;
		}
	if (waitcounter => 1) 
		window.location.href ="https://soundcloud.com/catchinashes";
}

//okay, so there is an issue here in chrome for android where it will follow the redirect into the soundcloud app, but if you go back to the browser it will be stuck with "loading"
//if I put an inner html edit after the redirect it doesn't read loading at all.
//idea: put a regular html link at the bottom of the page