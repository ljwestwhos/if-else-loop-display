var displayDiv = document.body.querySelector(".display");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for (var i = 0 ; i < 6 ; i++) {
  var innerDiv = document.createElement("div");
  
  if(animals[i] == "cat"){
    innerDiv.innerHTML = "I am a cat";
  } 
  else if(animals[i] == "dog"){
    innerDiv.innerHTML = "borf borf";
  }
  else{
    innerDiv.innerHTML = "I am an animal";
  }
  
  displayDiv.appendChild(innerDiv);
}