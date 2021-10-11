let speedaction ={
  up:0,
  down:0
};


// Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.
let classifier;
// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const options = { probabilityThreshold: 0.7 };
// Two variable to hold the label and confidence of the result
let label;
let confidence;

function preload() {
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup() {
  noCanvas();
  // Create 'label' and 'confidence' div to hold results
  label = createDiv('Label: ...');
  //confidence = createDiv('Confidence: ...');
  // Classify the sound from microphone in real time
  classifier.classify(gotResult);
  


}

        // WEBSOCKET STUFF
const serverAddress = 'wss://hmc-hackathon-server.glitch.me/';
     

const serverConnection = new WebSocket(serverAddress);

serverConnection.onopen = function() {
    console.log("I just connected to the server that does Sound Lighting control interface " + serverAddress);
       
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  let labelres = results[0].label;
  
  
  
  console.log(results[0].label);
  // Show the first label and confidence
  label.html('Label: ' + results[0].label);
  
   if (labelres == "up"){
      
      speedaction ={
        up:1,
        down:0
      };

    }
  
  if (labelres == "down"){
      
      speedaction ={
        up:0,
        down:1
      };

    }
  
    let result = JSON.stringify(speedaction);
    
  //console.log(results)
  console.log(speedaction);
  serverConnection.send(result);
  
  //confidence.html('Confidence: ' + nf(results[0].confidence, 0, 2)); // Round the confidence to 0.01
}
