function setup() {
  createCanvas(400, 400);
  noCanvas();
}

function draw() {
  background(220);
}

function findRhymes(word) {
  background(220);
  //calling the lexicon from rita and making it a variable 
  var lexicon = new RiLexicon();
  //calling the lexicon from rita and making it a variable 
  var rhymes = lexicon.rhymes(word);
  const peopleContainer3 = document.querySelector("container");
  var rhyme = rhymes[Math.floor(Math.random() * rhymes.length)];
  return rhyme;
  }

/*creating function for the codes output */
function send() 
{ /*taking the input in my text container (msg) and making it an element so it can be displayed*/
  let msg = select("#msg").value();
  /* if the msg does not equal the input */
  if (msg != "") {
    console.log(msg)
    //msg = escape(msg); 
    console.log (msg)
    /*styling it to css creating a container for HTML elements*/
   //putting the msg on the screen so user can see their inputs which will be displayed on the right side of the screen in a darker color (to be styled in css).
    
    let div = createDiv('<span class="right-txt">' + msg +  '</span>').addClass("container").addClass("darker");
    div.parent("txtScreen");
    let objDiv = document.getElementById("txtScreen"); 
    //calling the txtscreen so i can manipulate it bellow
    objDiv.scrollTop = objDiv.scrollHeight; //making it scrollable
    
    //method calls a the msg light, left alligned AFTER darker (user input) has been written. brings find rhymes   
    setTimeout(() =>{
    let rhyme = findRhymes(msg)
    console.log(rhyme)
    let reply = createDiv(rhyme).addClass("container");
    reply.parent("txtScreen");

    /* makes the screen scrollable */
    let objDiv = document.getElementById("txtScreen");
    objDiv.scrollTop = objDiv.scrollHeight;
    }, 1000);
    
    select ("#msg").value("")
  }
}


/* if the return(enter)(13) key is pressed, run the send function defined above. */
function keyPressed() {
  if (keyCode == 13) {
    send();
  }
} 

function keyDown(e) { 
  var e = window.event || e;
  var key = e.keyCode;
  //space pressed
   if (key == 32) { //space
    e.preventDefault();
   }
         
}


