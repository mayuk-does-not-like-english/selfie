var sr=window.webkitSpeechRecognition;
var rec=new sr();
function a(){
document.getElementById("ta").innerHTML="";
rec.start();    
}
rec.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
document.getElementById("ta").innerHTML=content;
if (content ==  "take my selfie") 
{
speak();    
}     
}
function speak(){
var syn=window.speechSynthesis;
var comm="taking your selfie in 5 seconds";
var tts=new SpeechSynthesisUtterance(comm);
syn.speak(tts); 
Webcam.attach(camera);
setTimeout(function()
{
 imgid="selfie1";   
 takesnap(); 
},5000
);  
setTimeout(function()
{
 imgid="selfie2";
 takesnap(); 
},10000
);  
setTimeout(function()
{
    imgid="selfie3";
 takesnap(); 
},15000
);  
}
Webcam.set({
width:350,
height:250,
image_format:'png',
png_quality:90  
});
camera=document.getElementById("c");
function takesnap(){
Webcam.snap(function(data_uri) {
if(imgid == "selfie1"){
    document.getElementById("r1").innerHTML='<img id="im1" src="'+data_uri+'">';    
} 

if(imgid == "selfie2"){
    document.getElementById("r2").innerHTML='<img id="im2" src="'+data_uri+'">';    
}  

if(imgid == "selfie3"){
    document.getElementById("r3").innerHTML='<img id="im3" src="'+data_uri+'">';    
}  

}) ;  
}
