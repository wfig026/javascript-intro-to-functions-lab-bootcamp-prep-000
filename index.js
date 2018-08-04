function shout(string){
  return string.toUpperCase()
};
 shout("hello");
<<<<<<< HEAD
 
function logShout(string){
  return console.log(string.toUpperCase())
}
logShout("hello")

function whisper(string){
  return string.toLowerCase();
}
whisper("HELLO")

function logWhisper(string){
  return console.log(string.toLowerCase())
}
logWhisper("HELLO")

function sayHiToGrandma(string){
=======
 function logShout(string){
  return console.log(string.toUpperCase())
}
 logShout("hello")
 function whisper(string){
  return string.toLowerCase();
}
 whisper("HELLO")
 function logWhisper(string){
  return console.log(string.toLowerCase())
}
 logWhisper("HELLO")
 function sayHiToGrandma(string){
>>>>>>> 80e301e9ebc7c9a8492b85cae8d3d3ff38b4808a
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
}
<<<<<<< HEAD

sayHiToGrandma("hello");
=======
 sayHiToGrandma("hello");
>>>>>>> 80e301e9ebc7c9a8492b85cae8d3d3ff38b4808a
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");