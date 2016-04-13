(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var ClickBoard = require("./ClickBoard");

new ClickBoard();

},{"./ClickBoard":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGljay1nYW1lL2NsaWVudC9zb3VyY2UvanMvQ2xpY2tCb2FyZC5qcyIsImNsaWNrLWdhbWUvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBDbGlja0JvYXJkID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGNvbG9ycyA9IFtbXCJyZWRcIiwwXSxbXCJibHVlXCIsIDBdLFtcInllbGxvd1wiLCAwXV07XHJcbiAgdmFyIG15QnJpY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNib2FyZCBkaXZcIik7XHJcbiAgdmFyIHJhbmROdW0gPSAwO1xyXG4gIHZhciByYW5kQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIgKyAxKSk7XHJcbiAgdmFyIHVuaXF1ZSA9IGZhbHNlO1xyXG4gIHZhciBjbGlja0NvdW50ID0gMDtcclxuICB2YXIgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZVwiKTtcclxuICB2YXIgdGltZUNvdW50ID0gMDtcclxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgIHRpbWVDb3VudCArPSAxO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHRpbWVDb3VudDtcclxuICB9LCAxMDApO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JUb0NsaWNrXCIpLnRleHRDb250ZW50ICs9IGNvbG9yc1tyYW5kQ29sXVswXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IDk7IGkgKz0gMSkge1xyXG4gICAgZG8ge1xyXG4gICAgICByYW5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIgKyAxKSk7XHJcbiAgICAgIGlmKHJhbmROdW0gPT09IDAgJiYgY29sb3JzWzBdWzFdIDwgMyl7XHJcbiAgICAgICAgY29sb3JzWzBdWzFdICs9IDE7XHJcbiAgICAgICAgbXlCcmlja3NbaV0uY2xhc3NMaXN0LmFkZChjb2xvcnNbMF1bMF0pO1xyXG4gICAgICAgIHVuaXF1ZSA9IHRydWU7XHJcbiAgICAgICAgaWYocmFuZENvbCA9PT0gMCkge1xyXG4gICAgICAgICAgbXlCcmlja3NbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNvbG9yc1swXVswXSk7XHJcbiAgICAgICAgICAgIGNsaWNrQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgaWYoY2xpY2tDb3VudCA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2UgaWYocmFuZE51bSA9PT0gMSAmJiBjb2xvcnNbMV1bMV0gPCAzKXtcclxuICAgICAgICBjb2xvcnNbMV1bMV0gKz0gMTtcclxuICAgICAgICBteUJyaWNrc1tpXS5jbGFzc0xpc3QuYWRkKGNvbG9yc1sxXVswXSk7XHJcbiAgICAgICAgdW5pcXVlID0gdHJ1ZTtcclxuICAgICAgICBpZihyYW5kQ29sID09PSAxKSB7XHJcbiAgICAgICAgICBteUJyaWNrc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY29sb3JzWzFdWzBdKTtcclxuICAgICAgICAgICAgY2xpY2tDb3VudCArPSAxO1xyXG4gICAgICAgICAgICBpZihjbGlja0NvdW50ID09PSAzKXtcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZSBpZihyYW5kTnVtID09PSAyICYmIGNvbG9yc1syXVsxXSA8IDMpe1xyXG4gICAgICAgIGNvbG9yc1syXVsxXSArPSAxO1xyXG4gICAgICAgIG15QnJpY2tzW2ldLmNsYXNzTGlzdC5hZGQoY29sb3JzWzJdWzBdKTtcclxuICAgICAgICB1bmlxdWUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHJhbmRDb2wgPT09IDIpIHtcclxuICAgICAgICAgIG15QnJpY2tzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNvbG9yc1syXVswXSk7XHJcbiAgICAgICAgICAgICAgY2xpY2tDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgIGlmKGNsaWNrQ291bnQgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9d2hpbGUodW5pcXVlID09PSBmYWxzZSk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDbGlja0JvYXJkO1xyXG4iLCJ2YXIgQ2xpY2tCb2FyZCA9IHJlcXVpcmUoXCIuL0NsaWNrQm9hcmRcIik7XHJcblxyXG5uZXcgQ2xpY2tCb2FyZCgpO1xyXG4iXX0=
