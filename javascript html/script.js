function myFunction() {
    document.getElementById("btn").innerHTML = "Hello World";
    document.getElementById("btn").style.color = "red";
  }

var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'button';
document.body.appendChild(btn);

  
// schijf hier tussen je code

var button = document.querySelector('button');
button.onclick = function() {
  //do stuff
  console.log("button was clicked");
}

// schijf hier tussen je code