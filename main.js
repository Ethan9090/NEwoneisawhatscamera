
function preload(){

}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center();


    camera = createCapture(VIDEO);
    camera.size(500,500);
    camera.hide();

    modeL = ml5.objectDetector("cocossd",modelLoaded);


}

function modelLoaded(){

    console.log("mymodelworkssonowicanuseittomakethiswork");

}

function draw(){

    image(camera,0,0,500,350);

}