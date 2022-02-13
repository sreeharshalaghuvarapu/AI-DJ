song = "";

scoreLeftWrist = 0;
scoreRightWrist = 0;
rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('poseNet is initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000")
    storke("#FF0000")

    if(scoreLeftWrist > 0.2)
     {
         circle(leftWristX,leftWristY,20);
        InNumberleftwristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftwristY)
        leftWristY_divide_1000 = remove_decimals/1000;
        volume =leftWristY_divide_1000 *2 ;
        document.getElementById("volume").innerHTML = "volume = " + volume;
        song.setVolume(volume);
    }
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        scoreLeftWrist = results[0].pose.keypoints[9].score
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        
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


