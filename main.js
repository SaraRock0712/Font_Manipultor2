function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canavs = createCanvas(550,550);
    canavs.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("POSENET IS INITIALIZED");
}

function draw(){
    background('#E6E6F');
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
}
}