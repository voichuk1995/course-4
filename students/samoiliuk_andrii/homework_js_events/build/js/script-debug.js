"use strict";

var listener = document.querySelector(".page");
listener.addEventListener("click", onclick);
var buttonOpen = document.querySelector(".button_open");
var buttonClose = document.querySelector(".button_close");
var modalWindow = document.querySelector(".modal");

function onclick(event) {
  if (event.target === buttonClose || event.target === buttonOpen) {
    modalWindow.classList.toggle("modal_close");
    modalWindow.classList.toggle("modal_open");
  }
}

document.querySelector(".trafficSwitch").addEventListener("click", trafficLight);
var phase = 1;

function trafficLight(event) {
  if (event.target === event.currentTarget) {
    var redLight = document.querySelector(".red");
    var yellowLight = document.querySelector(".yellow");
    var greenLight = document.querySelector(".green");
    phase++;

    if (phase > 5) {
      phase = 1;
    }

    ;

    switch (phase) {
      case 1:
        yellowLight.classList.add("light_off");
        yellowLight.classList.remove("light_yellow");
        greenLight.classList.add("light_green");
        redLight.classList.add("light_off");
        redLight.classList.remove("light_red");
        break;

      case 2:
        greenLight.classList.remove("light_green");
        greenLight.classList.add("light_greenBlinking");
        break;

      case 3:
        greenLight.classList.remove("light_greenBlinking");
        yellowLight.classList.remove("light_off");
        yellowLight.classList.add("light_yellow");
        break;

      case 4:
        yellowLight.classList.toggle("light_off");
        yellowLight.classList.toggle("light_yellow");
        redLight.classList.toggle("light_off");
        redLight.classList.toggle("light_red");
        break;

      case 5:
        yellowLight.classList.toggle("light_yellow");
        yellowLight.classList.toggle("light_off");
        break;
    }
  }
}