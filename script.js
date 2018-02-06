console.log("Hello World");

function preload() {
    soundFormats("mp3");
    c1 = loadSound("audios/siento.mp3");
    c2 = loadSound("audios/perdido.mp3");
    c3 = loadSound("audios/Noescaparas.mp3");
}

var pos = 0;

function setup() {

    canv = createCanvas(300,250);
    canv.background(0, 0, 50);
    amp = new p5.Amplitude();

    //BUTONS
    arr = [c1, c2, c3];
    pre = createButton("<< Prev");
    play = createButton("Play");
    stop = createButton("Stop");
    pause = createButton("Pause");
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
}

function draw() {
    background(0);
    fill(255);
    var level = amp.getLevel();
    var size = map(level, 0, 1, 0, 200);
    ellipse(width / 2, height / 2, size, size);
}

//DROP
function songChange() {
    var item = drop.value();
    switch(item){
        case "1.- Siento":
        arr[1].stop();
        arr[2].stop();
        arr[0].play();
        break;
        case "2.- Perdido en el Momento":
        arr[0].stop();
        arr[2].stop();
        arr[1].play();
        break;
        case "3.- No Escaparás":
        arr[0].stop();
        arr[1].stop();
        arr[2].play();
        break;
    }
}

//PLAY
function playM() {
   arr[pos].play()
}
//STOP
function stopM() {
    arr[pos].stop();
}
//STOP
function pauseM() {
    arr[pos].pause();
}
//NEXT
function nextS() {
    arr[pos].stop();
    pos = pos + 1;
    if(pos == 3 ){
        pos = pos - 3;
    }
    arr[pos].play();
    arr[pos].setLoop(false);
}
//PREV
function prevS() {
    arr[pos].stop();
    pos = pos - 1;
    if(pos == -1){
        pos = pos + 3;
    }
    arr[pos].play();
}
//RAND
function randS(){
    var select = random(arr);
    arr[pos].play();
    console.log("Random Song On");
}

//LOOP
function loopS() {
    arr[pos].setLoop(true);
    console.log("It´s looping");
}

