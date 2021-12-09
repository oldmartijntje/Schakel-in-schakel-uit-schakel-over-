function myFunction(lightOnOrOff, times) {
    
    if (lightOnOrOff == "on")  
    {
      lightOnOrOff = "off";
      console.log("The light has been turned off");
      document.body.style.backgroundColor = "black";
      btn.innerHTML = 'Turn The Light On';
    }
    else if (lightOnOrOff == "off")  
    {
      lightOnOrOff = "on";
      console.log("The light has been turned on");
      document.body.style.backgroundColor = "yellow";
      btn.innerHTML = 'Turn The Light Off';
    }
    times += 1
    if (times > 20){
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank').focus();
    }
    return lightOnOrOff, times
  }

var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Turn The Light On';
document.body.appendChild(btn);
var times = 0
  
// schijf hier tussen je code
document.body.style.backgroundColor = "black";
var lightOnOrOff = "off";
var button = document.querySelector('button');
button.onclick = function() {
  //do stuff
  lightOnOrOff, times = myFunction(lightOnOrOff, times)
}

// schijf hier tussen je code