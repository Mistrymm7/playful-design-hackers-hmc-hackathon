let button;
let button2;

let a,b,c,d,e,f,g,h,i,j,k;

let resultexport={};

  


// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/DQxrmtrLW/';


let canvas;

// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  canvas = createCanvas(0.8*windowWidth, 0.9*windowHeight);
  background(0);
  
  resultexport.shapeclass='abcd';
  resultexport.trirad = 2;
  resultexport.rectl= 2;
  resultexport.rectw = 2;
  resultexport.pentrad= 2;
  resultexport.cirrad= 2;
  resultexport.floorh= 2;
  resultexport.floornum= 2; 
  resultexport.wintop= 2;
  resultexport.windbot= 2;
  resultexport.widleft= 2;
  resultexport.widright= 2;
  
  fill(255)
   .strokeWeight(2);
  textSize(10);
  noStroke();
  
  slid1 = createSlider(0, 20, 8);
  slid1.position(10, 0.6*windowHeight);
  text('Triangle Radius', slid1.x * 2 +   slid1.width, 0.6*windowHeight+12);
  
  slid2 = createSlider(0, 20, 16);
  slid2.position(10, 0.6*windowHeight+ 20);
  text('Rectangle Length', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+ 20);
  
  slid3 = createSlider(0, 20, 6);
  slid3.position(10, 0.6*windowHeight+ 40);
  text('Rectangle Width', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+ 40);
  
  
  slid4 = createSlider(0, 20, 12);
  slid4.position(10, 0.6*windowHeight+ 60);
  text('Pentagon Radius', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+ 60);
  
  slid5 = createSlider(0, 20, 10);
  slid5.position(10, 0.6*windowHeight+ 80);
  text('Pentagon Radius', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+ 80);
  
  slid6 = createSlider(28, 40, 36);
  slid6.position(10, 0.6*windowHeight-80);
  text('Floor to Floor Height', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12- 80);
  
  slid7 = createSlider(0, 20, 9);
  slid7.position(10, 0.6*windowHeight-60);
  text('No. of Floors', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12- 60);
  
  
  slid8 = createSlider(0, 10, 4);
  slid8.position(10, 0.6*windowHeight+120);
  text('Window Opening Height from Ceiling', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+120);
  
  slid9 = createSlider(0, 10, 2);
  slid9.position(10, 0.6*windowHeight+140);
  text('Window Opening Height from Floor', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+140);
  
  slid10 = createSlider(0, 10, 3);
  slid10.position(10, 0.6*windowHeight+160);
  text('Window Width from Left Edge', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+160);
  
  slid11 = createSlider(0, 10, 2);
  slid11.position(10, 0.6*windowHeight+180);
  text('Window Width from Right Edge', slid2.x * 2 +   slid2.width, 0.6*windowHeight+12+180);
  
  
   slid1.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  
  slid2.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid3.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid4.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid5.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid6.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid7.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid8.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid9.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid10.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
  slid11.changed(() => {
    exporttogh();
    console.log(resultexport);
    let str = JSON.stringify(resultexport);
    serverConnection.send(str);
     
     
   })
     
    
  
  
  
  button = createButton('Classify');
  button.position(0, 0);
  button.mousePressed(classifyImage);
  
  
  button2 = createButton('Clear Canvas');
  button2.position(0.5*windowWidth, 0);
  button2.mousePressed(clearcanvas);
  
  
  
  
  fill(255)
   .strokeWeight(5)
   .textSize(10);
  textSize(18);
  textFont('Georgia');
  
}

function exporttogh(){
  
  resultexport={
  
  shapeclass: label,
  trirad : slid1.value(),
  rectl : slid2.value(),
  rectw : slid3.value(),
  pentrad : slid4.value(),
  cirrad :slid5.value(),
  floorh :slid6.value(),
  floornum :slid7.value(),
  wintop :slid8.value(),
  winbot : slid9.value(),
  winleft : slid10.value(),
  winright : slid11.value(),
    }
  
}


function draw() {
  
  noStroke();
  
  let a = slid1.value();
  let b = slid2.value();
  let c = slid3.value();
  let d = slid4.value();
  let e = slid5.value();
  let f = slid6.value();
  let g = slid7.value();
  let h = slid8.value();
  let i = slid9.value();
  let j = slid10.value();
  let k = slid11.value();
  
  
  //console.log(trirad);
  
  
  if (mouseIsPressed === true) {
    stroke(255);

    fill(255)
     .strokeWeight(10);
   line(mouseX, mouseY, pmouseX, pmouseY);}
  
}


        // WEBSOCKET STUFF
const serverAddress = 'wss://hmc-hackathon-server.glitch.me/';
     

const serverConnection = new WebSocket(serverAddress);

serverConnection.onopen = function() {
    console.log("I just connected to the server that does Shape Classification " + serverAddress);
       
}


// Get a prediction for the current video frame
function classifyImage() {
  classifier.classify(canvas, gotResult);
}

function clearcanvas(){
  background(0);
}

function keyPressed() {
  
  classifier.classify(canvas, gotResult);
  }


// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);
  label = results[0].label;
  
  serverConnection.send(label);
  //console.log(results);
  
   exporttogh();
  //console.log(resultexport);
  let str = JSON.stringify(resultexport);
  serverConnection.send(str);
  
  noStroke();
  fill(255)
     .strokeWeight(2);
  text('ML Shape Classification is ' + label, 20, 0.45*windowHeight);
  //fill(255, 0, 0);
  
}

serverConnection.onmessage = function(event) {
  console.log("Received: " + event.data);
  
}