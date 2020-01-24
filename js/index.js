"use strict";

// SLIDER

let step = 0;
let slider = document.querySelector('.slider_wrapper');
let toRight = document.querySelector('.slider__control_right');
let toLeft = document.querySelector('.slider__control_left');
let stepOne = document.querySelector('.stepOne');
let stepTwo = document.querySelector('.stepTwo');
let stepThree = document.querySelector('.stepThree');

toRight.onclick = function(){
	if(step == 2){
		step = 0;
		slider.style.transform = 'translate(' + -80 * step + '%)';
		stepThree.style.background = '#b0b8b9';
		stepOne.style.background = '#e2534b';
	} else {
		switch(step){
			case 0: stepOne.style.background = '#b0b8b9';
					stepTwo.style.background = '#e2534b';
					break;
			case 1: stepTwo.style.background = '#b0b8b9';
					stepThree.style.background = '#e2534b';
					break;
		}
		step++;
		slider.style.transform = 'translate(' + -80 * step + '%)';
	}
}
toLeft.onclick = function(){
	if(step == 0){
		step = 2;
		slider.style.transform = 'translate(' + -80 * step + '%)';
		stepThree.style.background = '#e2534b';
		stepOne.style.background = '#b0b8b9';
	} else {
		switch(step){
			case 1: stepOne.style.background = '#e2534b';
					stepTwo.style.background = '#b0b8b9';
					break;
			case 2: stepTwo.style.background = '#e2534b';
					stepThree.style.background = '#b0b8b9';
					break;
		}
		step--;
		slider.style.transform = 'translate(' + -80 * step + '%)';
	}
}
stepOne.onclick = function(){
	switch(step){
		case 1: stepTwo.style.background = '#b0b8b9';
		break;
		case 2: stepThree.style.background = '#b0b8b9';
		break;
	}
	stepOne.style.background = '#e2534b';
	step = 0;
	slider.style.transform = 'translate(' + -80 * step + '%)';
}
stepTwo.onclick = function(){
	switch(step){
		case 0: stepOne.style.background = '#b0b8b9';
		break;
		case 2: stepThree.style.background = '#b0b8b9';
		break;
	}
	stepTwo.style.background = '#e2534b';
	step = 1;
	slider.style.transform = 'translate(' + -80 * step + '%)';
}
stepThree.onclick = function(){
	switch(step){
		case 0: stepOne.style.background = '#b0b8b9';
		case 1: stepTwo.style.background = '#b0b8b9';
	}
	stepThree.style.background = '#e2534b';
	step = 2;
	slider.style.transform = 'translate(' + -80 * step + '%)';
}