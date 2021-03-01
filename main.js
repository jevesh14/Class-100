var SpeechRecognition = window.webkitSpeechRecognition;
var Speech = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML = "";
    Speech.start();
}
Speech.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
    if(content == "take my selfie")
    {
        speak();
        console.log("taking selfie......");
    }
    
}
 function speak(){
     var synth = window.speechSynthesis;
     speak_data = document.getElementById("text_box").value;
     var utterthis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterthis);
     Webcam.attach(camera);
     setTimeout(function(){
          take_snaphot();
          save();

     },5000);
          
 }
Webcam.set({
    width: 360,
    height:250,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");

function take_snaphot()
{ 
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'">'
      });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}
