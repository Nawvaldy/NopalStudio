// Typing Effect Premium

document.addEventListener("DOMContentLoaded", function(){

  const text = "NOPAL STUDIO";

  let i = 0;

  function typing(){

    if(i < text.length){

      document.getElementById("typing").innerHTML += text.charAt(i);

      i++;

      setTimeout(typing,70);

    }

  }

  typing();

});

// Game Logic

let score=0;

let time=30;

let interval;

let speed=1000;

const box=document.getElementById("box");

const area=document.getElementById("gameArea");

function moveBox(){

  const x=Math.random()*(area.clientWidth-80);

  const y=Math.random()*(area.clientHeight-80);

  box.style.left=x+"px";

  box.style.top=y+"px";

}

box.addEventListener("click",function(){

  if(time>0){

    score++;

    document.getElementById("score").innerText=score;

    moveBox();

    speed-=20; // makin cepat

  }

});

function startGame(){

  score=0;

  time=30;

  speed=1000;

  document.getElementById("score").innerText=score;

  document.getElementById("time").innerText=time;

  moveBox();

  clearInterval(interval);

  interval=setInterval(function(){

    time--;

    document.getElementById("time").innerText=time;

    if(time<=0){

      clearInterval(interval);

      alert("🔥 Game Over! Score kamu: "+score);

    }

  },1000);

}

const uploadInput = document.getElementById("upload");

const previewContainer = document.getElementById("preview-container");

uploadInput.addEventListener("change", function() {

  previewContainer.innerHTML = ""; // reset gallery

  const files = this.files;

  for (let i = 0; i < files.length; i++){

    const reader = new FileReader();

    reader.onload = function(e){

      const img = document.createElement("img");

      img.src = e.target.result;

      img.className = "preview-img";

      previewContainer.appendChild(img);

    }

    reader.readAsDataURL(files[i]);
    
    }

  })