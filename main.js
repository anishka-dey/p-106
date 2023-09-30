function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/P_Gp6bJYR/model.json", modelReady);
}
dog=0;
cat=0;
lion=0;
cow=0;

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, result){
   if(error){
    console.log("error");
   }
   else{
    console.log("result");
   }
   random_r=Math.floor(Math.random()*255)+1;
   random_b=Math.floor(Math.random()*255)+1;
   random_g=Math.floor(Math.random()*255)+1;

   document.getElementById("result_label").innerHTML="I can hear-" + result[0].label;
   document.getElementById("result_confidence").innerHTML="Accuracy:" + (result[0].confidence*100).toFixed(2)+"%";

   document.getElementById("result_label").style.color="rgb("+random_r+", "+random_g+", "+random_b+")"
   document.getElementById("result_confidence").style.color="rgb("+random_r+", "+random_g+", "+random_b+")"

   img=document.getElementById("ear");
   document.getElementById("d").innerHTML="Detected dog: " + dog + " Detected Cat: " + cat + " Detected Lion: " + lion + " Detected Cow: " + cow;

   if(result[0].label=="Barking"){
    img.src="dog.gif";
    dog=dog+1;
   }
   else if(result[0].label=="Meowing"){
    img.src="cat.gif";
    cat=cat+1;
   }
   else if(result[0].label=="Roaring"){
    img.src="lion.gif";
    lion=lion+1;
   }
   else if(result[0].label=="Mooing"){
    img.src="cow.gif";
    cow=cow+1;
   }
   else{
    img.src="ear.png";
   }
}