status = "";
coco = [];

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
    
    image(camera,0,0,500,350);
        
    if(status != ""){
    modeL.detect(camera,gotResult);

    for(i=0; i < coco.length; i++){

            mypercent = floor(coco[i].confidence*100) + "%";

            fill(100,21,69);
            text(coco[i].label + " " + mypercent,coco[i].x + 15,coco[i].y + 15);
            noFill();
            stroke(231,5,8);
            rect(coco[i].x,coco[i].y,coco[i].width,coco[i].height);

        }
    }
}