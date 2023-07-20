ocul(0);


const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn10 = document.querySelector('#btn10');
const btn11 = document.querySelector('#btn11');
const btn12 = document.querySelector('#btn12');
const btn13 = document.querySelector('#btn13');
const btn14 = document.querySelector('#btn14');
const btn15 = document.querySelector('#btn15');
const btn16 = document.querySelector('#btn16');
const btn17 = document.querySelector('#btn17');
const btn18 = document.querySelector('#btn18');
const btn19 = document.querySelector('#btn19');
const btn20 = document.querySelector('#btn20');
const btn21 = document.querySelector('#btn21');
const btn22 = document.querySelector('#btn22');
const btn23 = document.querySelector('#btn23');
const btn24 = document.querySelector('#btn24');


btn0.addEventListener("click",function(){ocul(0);});
btn1.addEventListener("click",function(){ocul(1);});
btn2.addEventListener("click",function(){ocul(2);});
btn3.addEventListener("click",function(){ocul(3);});
btn4.addEventListener("click",function(){ocul(4);});
btn5.addEventListener("click",function(){ocul(5);});
btn6.addEventListener("click",function(){ocul(6);});
btn7.addEventListener("click",function(){ocul(7);});
btn8.addEventListener("click",function(){ocul(8);});
btn9.addEventListener("click",function(){ocul(9);});
btn10.addEventListener("click",function(){ocul(10);});
btn11.addEventListener("click",function(){ocul(11);});
btn12.addEventListener("click",function(){ocul(12);});
btn13.addEventListener("click",function(){ocul(13);});
btn14.addEventListener("click",function(){ocul(14);});
btn15.addEventListener("click",function(){ocul(15);});
btn16.addEventListener("click",function(){ocul(16);});
btn17.addEventListener("click",function(){ocul(17);});
btn18.addEventListener("click",function(){ocul(18);});
btn19.addEventListener("click",function(){ocul(19);});
btn20.addEventListener("click",function(){ocul(20);});
btn21.addEventListener("click",function(){ocul(21);});
btn22.addEventListener("click",function(){ocul(22);});
btn23.addEventListener("click",function(){ocul(23);});
btn24.addEventListener("click",function(){ocul(24);});


function ocul(num){
	for(let i=0;i<25;i++){
		document.getElementById("caj"+i).style.display = "none";
	}
	document.getElementById("caj"+num).style.display = "block";
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })