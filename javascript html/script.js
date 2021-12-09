function myFunction(lightOnOrOff) {
    
    if (lightOnOrOff == "on")  
    {
      lightOnOrOff = "off";
      console.log("The light has been turned off");
      document.body.style.backgroundColor = "black";
    }
    else if (lightOnOrOff == "off")  
    {
      lightOnOrOff = "on";
      console.log("The light has been turned on");
      document.body.style.backgroundColor = "yellow";
    }
    return lightOnOrOff
  }

var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'button';
document.body.appendChild(btn);

  
// schijf hier tussen je code
document.body.style.backgroundColor = "black";
var lightOnOrOff = "off";
var button = document.querySelector('button');
button.onclick = function() {
  //do stuff
  lightOnOrOff = myFunction(lightOnOrOff)
}

// schijf hier tussen je code