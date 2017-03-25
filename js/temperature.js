var choice = 0;                                                         /*initialize choice to zero*/
var report = function (celsius, fahrenheit, kelvin, miles, kilometers) {
    "use strict";
    if (choice === 1) {
        document.getElementById("result").innerHTML = (parseFloat(fahrenheit).toFixed(2) + "\xB0F = " + parseFloat(celsius).toFixed(2) + "\xB0C and also " +  parseFloat(kelvin).toFixed(2) + " K");                                /*if button pressed is f_to_c/k, print this value to screen. Sets to 2 decimal places.*/
    } else if (choice === 2) {
        document.getElementById("result").innerHTML = (parseFloat(celsius).toFixed(2) + "\xB0C = " + parseFloat(fahrenheit).toFixed(2) + "\xB0F and also " + parseFloat(kelvin).toFixed(2) + " K");                                 /*if button pressed is c_to_f/k, print this value to screen. Sets to 2 decimal places.*/
    } else if (choice === 3) {
        document.getElementById("result").innerHTML = (parseFloat(kelvin).toFixed(2) + " K = " + parseFloat(fahrenheit).toFixed(2) + "\xB0F and also " + parseFloat(celsius).toFixed(2) + "\xB0C");                             /*if button pressed is k_to_c/f, print this value to screen. Sets to 2 decimal places.*/
    } else if (choice === 4) {
        document.getElementById("result").innerHTML = (parseFloat(miles).toFixed(4) + " Miles = " + parseFloat(kilometers).toFixed(4) + " Kilometers"); /*print mile to kilo*/
    } else if (choice === 5) {
        document.getElementById("result").innerHTML = (parseFloat(kilometers).toFixed(4) + " Kilometers = " + parseFloat(miles).toFixed(4) + " Miles"); /*print kilo to mile*/
    }
};

document.getElementById("f_to_c/k").onclick = function () {         /*when button f_to_c/k is clicked do the following*/
    "use strict";
    var f = document.getElementById("unit").value;                  /*get value of the input box labeled unit*/
    choice = 1;                                                     /*set choice to 1*/
    
    if (f >= -459.67) {                                             /*if farenheit is above absolute zero, print values*/
        report((f - 32) / 1.8, f, ((f - 32) * 5 / 9) + 273.15, 0, 0);
    } else {
        document.getElementById("result").innerHTML = "Error: Farenheit cannot fall below -459.67\xB0F as this is absolute zero."; /*else, print error*/
    }
};

document.getElementById("c_to_f/k").onclick = function () {             /*when button c_to_f/k is clicked do the following*/
    "use strict";
    var c = document.getElementById("unit").value;                      /*get value of the input box labeled unit*/
    choice = 2;                                                         /*set choice to 2*/
    
    if (c >= -273.15) {
        report(c, 1.8 * c + 32, 273.15 + c, 0, 0);                      /*if celsius is above absolute zero, print values*/
    } else {
        document.getElementById("result").innerHTML = "Error: Celsius cannot fall below -273.15\xB0C as this is absolute zero.";   /*else print error*/
    }
};

document.getElementById("k_to_c/f").onclick = function () {         /*when button k_to_c/f is clicked do the following*/
    "use strict";
    var k = document.getElementById("unit").value;                  /*get value of input box labeled unit*/
    choice = 3;                                                     /*set choice to 3*/
    
    if (k >= 0) {                                                   /*if kelvin is above absolute 0 print values*/
        report(k - 273.15, k * 9 / 5 - 459.67, k, 0, 0);
    } else {
        document.getElementById("result").innerHTML = "Error: Kelvin cannot fall below 0 K as this is absolute zero.";     /*else print error*/
    }
};

document.getElementById("m_to_k").onclick = function () {           /*when button miles to kilometer is pressed*/
    "use strict";
    choice = 4;                                                     /*set choice to 4*/
    var m = document.getElementById("unit").value;                  /*get input from unit*/
    if (m >= 0) {                                                   /*if miles are not negative print results*/
        report(0, 0, 0, m, m * 1.609344);
    } else {                                                        /*else give error*/
        document.getElementById("result").innerHTML = "Error: You cannot have negative miles.";
    }
};
                            /*send results information on miles and kilo and perform print functionality*/

document.getElementById("k_to_m").onclick = function () {           /*when button kilometer to miles is pressed*/
    "use strict";
    choice = 5;                                                     /*set choice to 5*/
    var kilo = document.getElementById("unit").value;               /*get input from input box labeled unit*/
    if (kilo >= 0) {                                                /*if kilo is not negative print results*/
        report(0, 0, 0, 0.621371 * kilo, kilo);
    } else {
        document.getElementById("result").innerHTML = "Error: You cannot have negative kilometers.";    /*else give error*/
    }
};