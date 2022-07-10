//
//    © Philiphoney 2022
//    Author: Philiphoney https://github.com/philiphoney
//    Version 1.0
//    MoodyDate: https://github.com/philiphoney/Moody-Date
//

var month;
var monthN;
var weekday;

// Time and Date
window.setInterval('TimeDate()', 200);

// Month as text
switch(new Date().getMonth()) {
    case 0:
        month = "January";
       break;
    case 1:
        month = "February";
       break;
    case 2:
        month = "March";
       break;
    case 3:
        month = "April";
       break;
    case 4:
        month = "May";
       break;
    case 5:
        month = "June";
       break;
    case 6:
        month = "July";
       break;
    case 7:
        month = "August";
       break;
    case 8:
        month = "September";
       break;
    case 9:
        month = "October";
       break;
    case 10:
        month = "November";
       break;
    case 11:
        month = "December";
       break;
}

// Month in Number
switch(new Date().getMonth()) {
    case 0:
        monthN = "01";
       break;
       case 1:
        monthN = "02";
       break;
    case 2:
        monthN = "03";
       break;
    case 3:
        monthN = "04";
       break;
    case 4:
        monthN = "05";
       break;
    case 5:
        monthN = "06";
       break;
    case 6:
        monthN = "07";
       break;
    case 7:
        monthN = "08";
       break;
    case 8:
        monthN = "09";
       break;
    case 9:
        monthN = "10";
       break;
    case 10:
        monthN = "11";
       break;
    case 11:
        monthN = "12";
       break;
}

// Weekdays
switch(new Date().getDay()) {
    case 0:
        weekday = "Su";
       break;
    case 1:
        weekday = "Mo";
       break;
    case 2:
        weekday = "Tu";
       break;
    case 3:
        weekday = "We";
       break;
    case 4:
        weekday = "Th";
       break;
    case 5:
        weekday = "Fr";
       break;
    case 6:
        weekday = "Sa";
       break;
}

function TimeDate() {
    
    // Extract the data from get
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDate();
    var ye = today.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    day = checkTime(day);

   // Test if the class is there
   if (document.getElementsByClassName('moodyTime').length) {document.getElementsByClassName("moodyTime")[0].innerHTML = ( h + ":" + m);}
   if (document.getElementsByClassName('moodyTimeWithSeconds').length) {document.getElementsByClassName("moodyTimeWithSeconds")[0].innerHTML = ( h + ":" + m + ":" + s);}
   if (document.getElementsByClassName('moodyFullDate').length) {document.getElementsByClassName("moodyFullDate")[0].innerHTML = (day + "." + monthN + "." + ye);}
   if (document.getElementsByClassName('moodyDateDay').length) {document.getElementsByClassName("moodyDateDay")[0].innerHTML = day;}
   if (document.getElementsByClassName('moodyDateMonth').length) {document.getElementsByClassName("moodyDateMonth")[0].innerHTML = month;}
   if (document.getElementsByClassName('moodyDateMonthNumber').length) {document.getElementsByClassName("moodyDateMonthNumber")[0].innerHTML = monthN;}
   if (document.getElementsByClassName('moodyDateYear').length) {document.getElementsByClassName("moodyDateYear")[0].innerHTML = ye;}
   if (document.getElementsByClassName('moodyDateWeekday').length) {document.getElementsByClassName("moodyDateWeekday")[0].innerHTML = weekday;}

   // Designs
   // Designs 1
   if (document.getElementsByClassName('moodyDesigns-1').length) {
       document.getElementsByClassName("moodyDesigns-1")[0].innerHTML = (day + "." + monthN + "." + ye);
       document.getElementsByClassName('moodyDesigns-1')[0].style.fontFamily = 'Arial, Helvetica, sans-serif'; document.getElementsByClassName('moodyDesigns-1')[0].style.padding = '1px'; document.getElementsByClassName('moodyDesigns-1')[0].style.border = '1px solid black';
}
   // Designs 2
   if (document.getElementsByClassName('moodyDesigns-2').length) {
       document.getElementsByClassName("moodyDesigns-2")[0].innerHTML = "Time: " + (h + ":" + m) + "<br>" + "Month: " + month + "<br>" + "Day: " + day;
       document.getElementsByClassName('moodyDesigns-2')[0].style.width = '133px'; document.getElementsByClassName('moodyDesigns-2')[0].style.display = 'flex'; document.getElementsByClassName('moodyDesigns-2')[0].style.fontFamily = 'Arial, Helvetica, sans-serif'; document.getElementsByClassName('moodyDesigns-2')[0].style.padding = '7px'; document.getElementsByClassName('moodyDesigns-2')[0].style.border = '1px solid black';
}}

// Fill in the zero
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}