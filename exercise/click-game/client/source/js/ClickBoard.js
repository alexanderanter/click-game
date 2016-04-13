var ClickBoard = function() {
  var colors = [["red",0],["blue", 0],["yellow", 0]];
  var myBricks = document.querySelectorAll("#board div");
  var randNum = 0;
  var randCol = Math.floor(Math.random() * (2 + 1));
  var unique = false;
  var clickCount = 0;
  var time = document.querySelector("#time");
  var timeCount = 0;
  var timer = setInterval(function() {
    timeCount += 1;
    time.textContent = timeCount;
  }, 100);
  document.querySelector("#colorToClick").textContent += colors[randCol][0];
  for (var i = 0; i < 9; i += 1) {
    do {
      randNum = Math.floor(Math.random() * (2 + 1));
      if(randNum === 0 && colors[0][1] < 3){
        colors[0][1] += 1;
        myBricks[i].classList.add(colors[0][0]);
        unique = true;
        if(randCol === 0) {
          myBricks[i].addEventListener("click", function(event){
            this.classList.remove(colors[0][0]);
            clickCount += 1;
            if(clickCount === 3){
              clearInterval(timer);
            }
          }, true);
        }
      }else if(randNum === 1 && colors[1][1] < 3){
        colors[1][1] += 1;
        myBricks[i].classList.add(colors[1][0]);
        unique = true;
        if(randCol === 1) {
          myBricks[i].addEventListener("click", function(event){
            this.classList.remove(colors[1][0]);
            clickCount += 1;
            if(clickCount === 3){
              clearInterval(timer);
            }
          }, true);
        }
      }else if(randNum === 2 && colors[2][1] < 3){
        colors[2][1] += 1;
        myBricks[i].classList.add(colors[2][0]);
        unique = true;
        if(randCol === 2) {
          myBricks[i].addEventListener("click", function(event){
              this.classList.remove(colors[2][0]);
              clickCount += 1;
              if(clickCount === 3){
                clearInterval(timer);
              }
          }, true);

        }
      }else {
        unique = false;
      }
    }while(unique === false);
  }
};

module.exports = ClickBoard;
