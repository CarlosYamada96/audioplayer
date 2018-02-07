console.log("SUPER ULTRA MEGA AUDIO PLAYER");

//PRELOAD FUNCTION

function preload() {
    soundFormats("mp3");
    c1 = loadSound("audios/siento.mp3");
    c2 = loadSound("audios/perdido.mp3");
    c3 = loadSound("audios/Noescaparas.mp3");
}

var pos = 0;

//SETUP FUNCTION

function setup() {

    canv = createCanvas(600, 780);
    canv.style("float", "right");
    canv.background(0, 0, 50);
    amp = new p5.Amplitude();

    //BUTONS
    arr = [c1, c2, c3];
    play = createButton("Play");
    pause = createButton("Pause");
    stop = createButton("Stop");
    pre = createButton("<< Prev");
    next = createButton("Next >>");
    rand = createButton("Rand");
    loop = createButton("Loop");
    play.mousePressed(playM);
    stop.mousePressed(stopM);
    pause.mousePressed(pauseM);
    next.mousePressed(nextS);
    pre.mousePressed(prevS);
    loop.mousePressed(loopS);
    rand.mousePressed(randS);

    //DROPMENU
    drop = createSelect();
    drop.option("1.- Siento");
    drop.option("2.- Perdido en el Momento");
    drop.option("3.- No Escaparás");
    drop.changed(songChange);


    play.size(263, 100);
    play.style("font-size", "30px");
    stop.size(263, 100);
    stop.style("font-size", "30px");
    pause.size(263, 100);
    pause.style("font-size", "30px");
    pre.size(263,100);
    pre.style("font-size", "30px");
    next.size(263, 100);
    next.style("font-size", "30px");
    rand.size(263, 100);
    rand.style("font-size", "30px");
    loop.size(263,100);
    loop.style("font-size", "30px");
    drop.size(526.7, 70);
    drop.style("font-size", "30px");

}

//DRAW FUNCYION

function draw() {
    background(0);
    fill(255);
    var level = amp.getLevel();
    var size = map(level, 0, 1, 0, 1000);
    ellipse(width / 2, height / 2, size, size);
}

//DROP FUNCTION
function songChange() {
    var item = drop.value();
    switch (item) {
        case "1.- Siento":
            arr[1].stop();
            arr[2].stop();
            arr[0].play();
            arr[pos].stop();
            pos = 0;
            break;
        case "2.- Perdido en el Momento":
            arr[0].stop();
            arr[2].stop();
            arr[1].play();
            arr[pos].stop();
            pos = 1;
            break;
        case "3.- No Escaparás":
            arr[0].stop();
            arr[1].stop();
            arr[2].play();
            arr[pos].stop();
            pos = 2;
            break;
    }
}

//PLAY FUNCTION
function playM() {
    arr[pos].play()
}
//STOP FUNCTION
function stopM() {
    arr[pos].stop();
}
//PAUSE FUNCTION
function pauseM() {
    arr[pos].pause();
}
//NEXT FUNCTION
function nextS() {
    arr[pos].stop();
    pos = pos + 1;
    if (pos == 3) {
        pos = pos - 3;
    }
    arr[pos].play();
    arr[pos].setLoop(false);
    console.log("Looping Off");
}
//PREV FUNCTION
function prevS() {
    arr[pos].stop();
    pos = pos - 1;
    if (pos == -1) {
        pos = pos + 3;
    }
    arr[pos].play();
    arr[pos].setLoop(false);
    console.log("Looping Off");
}
//RAND FUNCTION 
function randS() {
    arr[pos].stop();
    int = parseInt(arr);
    var select = random(arr.lengh);
    arr[pos].play();
    console.log("Random Song On");
}

//LOOP FUNCTION
function loopS() {
    arr[pos].setLoop(true);
    console.log("Looping On");
}



