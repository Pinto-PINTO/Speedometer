const speedometerNeedle = document.querySelector('.speedometer-needle');
const statusText = document.getElementById("status-txt");
const background = document.getElementById("speedometer-background");

function setSpeedometerValue(degrees) {
  if(degrees==-72){
    speedometerNeedle.style.transform = `rotate(${degrees}deg) translateX(-50%)`;
    statusText.innerHTML="Strong Sell";
    statusText.style.color="#f44336";
    background.style.backgroundImage="radial-gradient(#f4433600,#f443361c, #f443365b)";


  }else if(degrees==-36){
    speedometerNeedle.style.transform = `rotate(${degrees}deg) translateX(-50%)`;
    statusText.innerHTML="Sell";
    statusText.style.color="#d33a2f";
    background.style.backgroundImage="radial-gradient(#d33a2f00,#d33a2f0c, #d33a2f5b)";


  }else if(degrees==0){
    speedometerNeedle.style.transform = `rotate(${degrees}deg) translateX(-50%)`;
    statusText.innerHTML="Neutral";
    statusText.style.color="#787B86";
    background.style.backgroundImage="radial-gradient(#787B8600,#787B860c, #787B865b)";


  }else if(degrees==36){
    speedometerNeedle.style.transform = `rotate(${degrees}deg) translateX(-50%)`;
    statusText.innerHTML="Buy";
    statusText.style.color="#2457e6";
    background.style.backgroundImage="radial-gradient(#2457e600,#2457e60c, #2457e65b)";


  }else if(degrees==72){
    speedometerNeedle.style.transform = `rotate(${degrees}deg) translateX(-50%)`;
    statusText.innerHTML="Strong Buy";
    statusText.style.color="#2962ff";
    background.style.backgroundImage="radial-gradient(#2962ff00,#2962ff1c, #2962ff5b)";

  }else{
    alert("Invalid Value");
  }
  speedometerNeedle.style.transform = `rotate(${degrees}deg) translateX(-50%)`;
}

function setScore(score){
  var degrees;
  if(score==0){
    degrees=0;
  }else if(score==1){
    degrees=36;
  }else if(score>=2){
    degrees=72;
  }else if(score==-1){
    degrees=-36;
  }else if(score<=-2){
    degrees=-72;
  }else{
    alert("Invalid Score");
  }
setSpeedometerValue(degrees);
}


setScore(0);//Input Score