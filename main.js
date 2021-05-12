status = "";
coco = [];
start = "";
item = "";
function preload(){
}

function setup(){
    canvas = createCanvas(500,350);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.size(500,350);
    camera.hide();

    modeL = ml5.objectDetector("cocossd",modelLoaded);
    
}

function modelLoaded(){
    console.log("mymdoelisready");
    status = "yes";
}

function gotResult(error, results){
    if (error){
    console.log(error);
 }
    console.log(results); 
    coco = results;
}

function draw(){

    item = document.getElementById("inputpower").value;
    console.log(item);
    
    image(camera,0,0,500,350);
        
    if(status != "" & item != ""){
    modeL.detect(camera,gotResult);


    for(i=0; i < coco.length; i++){

            if(coco[i].label == item){
                document.getElementById("the-items").innerHTML = "there is a " + item;
            }
            else{
                document.getElementById("the-items").innerHTML = "i dont see a " + item;
            }

        }
    }
}