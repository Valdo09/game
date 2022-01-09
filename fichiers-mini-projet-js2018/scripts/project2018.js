// global variable for the project

// default initial width and heigth for the target
var TARGET_WIDTH = 40;
var TARGET_HEIGHT = 40;

// chrono management
// value of time in tenth of seconds
var time = 0;
// timer variable 
var chronoTimer = null;
var terrain=document.getElementById('terrain');

var start=document.getElementById("start");
var chrono=document.getElementById("chrono");
var seconde=0;
var minute=0;
var tenth=document.getElementById("tenth");
var seconds=document.getElementById("seconds");
var minutes=document.getElementById("minutes");
var coups=document.getElementById("nbtargets");
var	restant=document.getElementById('remaining');
var nombredeCibles=coups.value;
var copie=nombredeCibles;
var nombredeCiblesRestantes=nombredeCibles;
restant.textContent=nombredeCiblesRestantes;
function cibleCreation(){
	var cible=document.createElement("div");
	cible.classList.add("target");
	cible.classList.add("on");
	cible.style.top=Math.random()*90+"%";
	cible.style.left=Math.random()*90+"%";
	
	terrain.appendChild(cible);
	
	cible.onclick=function(){
		cible.classList.add("hit");
	 nombredeCiblesRestantes=copie--;
	restant.textContent=nombredeCiblesRestantes;
		setTimeout(function(){
		terrain.removeChild(cible);
		},1000);
		if(nombredeCiblesRestantes==0){
	clearInterval(chronoTimer);
	window.alert("Jeu terminé");
}

		
	}
	


}
function adapt(){
	nombredeCibles=coups.value;
	copie=nombredeCibles;
}


	

	
start.onclick=function(){
	seconde=1;
	chronoTimer=setInterval(function(){
	
	tenth.textContent=time;
	time+=1;
	
	if(time%10==0){
		time=0;
		seconde++;
		seconds.textContent=seconde;
		if(seconde%60==0){
		seconde=0;
		minute++;		
		minutes.textContent=minute;
	}
	}
	
	
	},100);
	
	//var nombredeCibles=coups.value;
	
	while(copie>0){
		cibleCreation();
		copie--;
	}
	


	
}





	





// Oswaldo Camille Grimaud

// YOUR CODE BELOW

	

