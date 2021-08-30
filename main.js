function say(){
    word=document.getElementById("word").value ; 
    var say = window.speechSynthesis ;
   speak_data = word ;
   var utterthis = new SpeechSynthesisUtterance(speak_data);
   say.speak(utterthis) ;
}