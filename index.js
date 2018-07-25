// Sticky header
// When the user scrolls the page, execute myFunction 
var url=location.pathname;
var header     = document.getElementById('header1');
var sticky = header.offsetTop;
var background = document.querySelector('.background');
// Get the header

var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function scroll() {
  if (window.pageYOffset > 60) {
    background.style.opacity=1;
    var cap=document.querySelectorAll(".capt");
    cap.forEach(function(data){
    	data.style.color="#fff";
    });
}}
// Scroll down button function
$(document).ready(function() {
    $("#slider").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 500 }, "slow");
        return false;
    });

});
if(url.split('/')[6].split('.')[0]==="index"){
window.onscroll = function() {myFunction();scroll();};
}
else{
  header.classList.add("sticky");
}


// 