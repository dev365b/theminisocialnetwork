// Get the input field
var input = document.getElementById("botInput");
var diag = document.getElementById("diag");
var face = document.getElementById("botFace");
var body = document.getElementById("body");
// Execute a function when the user releases a key on the keyboard

function botTalk(){
  if (input.value == "Hi" || input.value == "hi" || input.value == "hello"){
    diag.innerHTML = "Hello! What may I help you with today?";
    input.value = "";
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
    setTimeout(function(){
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
    },3000);
  } else if (input.value == "what is the oasis?"){

    diag.innerHTML = "The Oasis is a small social network project. Here, you search for other people's profiles, read a feed, check your own profile and talk a bot.";
    input.value = "";
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
    setTimeout(function(){
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
    },3000);


  } else if (input.value == "what is your name?" || input.value == "what is your name") {

    diag.innerHTML = "I am the Oasis bot.";
    input.value = "";
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
    setTimeout(function(){
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
    },3000);

  } else if (input.value == "what can you do?" || input.value == "what can you do") {

    diag.innerHTML = "I can run certain command lines you input, which may better your experience on the site." + "\n" + "Say / if you would like me to give you a list of commands you can type.";
    input.value = "";
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
    setTimeout(function(){
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
    },3000);

  } else if (input.value == "/") {

    diag.innerHTML = "Commands you can input include:" + "\n" + "1. 'change background colour'" + "\n" + "2. 'do some math'" + "\n" + "3. 'tell me a riddle'" + "\n" + "4. 'open a website'" + "\n" + "Please type all of these sentences exactly, with lowercase letters.";
    input.value = "";
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
    setTimeout(function(){
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
    },3000);


  } else if (input.value == "change background colour" || input.value == "change background color") {

    diag.innerHTML = "What colour? Pink, blue or red?";
    input.value = "";
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
    setTimeout(function(){
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
    },3000);

  } else if (input.value == "pink"){

body.style.backgroundColor = "pink"
diag.innerHTML = "Background color changed to pink.";
input.value = "";
face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
setTimeout(function(){
face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
},3000);

} else if (input.value == "blue"){

  body.style.backgroundColor = "blue"
  diag.innerHTML = "Background color changed to blue.";
  input.value = "";
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);

} else if (input.value == "red"){

  body.style.backgroundColor = "red"
  diag.innerHTML = "Background color changed to red.";
  input.value = "";
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);

} else if (input.value == "do some math") {

  diag.innerHTML = "Type an equation. Do not put the equal sign." + "\n" + "Use * for multiplication and / for division. Type your equation in 8 seconds. DO NOT press send";
  input.value = "";
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);

  setTimeout(function(){
  var val = input.value;
  var aval = eval(val);
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  diag.innerHTML = "Your equation has been solved and the answer is " + aval;
  input.value = ""
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);
},8000);

} else if (input.value == "tell me a riddle") {

diag.innerHTML = "I’m tall when I’m young, and I’m short when I’m old. What am I?";
input.value = "";
face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
setTimeout(function(){
face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
},3000);

} else if (input.value == "a candle") {

  diag.innerHTML = "Correct. Unfortunately, that's the only riddle I have a available for you as of now.";
  input.value = "";
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);

} else if (input.value == "open a website") {

  diag.innerHTML = "Tell me the website's link. You have 10 seconds. DO NOT press send.";
  input.value = "";
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);

  setTimeout(function(){
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif"
  var link  = input.value;
  window.open("http://" + link, '_blank');
  input.value = "";
  diag.innerHTML = "Website opened.";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);
},10000);

} else if (input.value == "change back") {

  body.style.backgroundColor = "black"
  diag.innerHTML = "Background color changed to back to black.";
  input.value = "";
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);

} else if (input.value == "back to the oasis") {
  diag.innerHTML = "Going back in 5 seconds...";
  input.value = "";
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
  setTimeout(function(){
  face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
  },3000);

  setTimeout(function(){
  window.location.href = "file:///Users/nethan/Desktop/WebDev/TheOasis/index.html";
},5000);
} else {
    diag.innerHTML = "Unfortunately I am unable to respond to your request. Please make sure you did not use any full stops and everything is lowercase. I also only have a limited amount of things I can say. Don't include any extra spaces after your word/sentence.";
    input.value = "";
    face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/ezgif-2-8f2c9372e6.gif";
    setTimeout(function(){
      face.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/Hnet.com-image.gif";
    },3000);
  }
}
