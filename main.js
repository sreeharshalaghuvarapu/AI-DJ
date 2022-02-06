song = "";

function preload()
{
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    posenet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('poseNet is initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.y; 
        console.log("leftWristX = " + leftWristX + "leftWristY ="+ leftWristY)

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY ="+ rightWristY)
    }
     
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);                     

}


