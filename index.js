// Sticky header
// When the user scrolls the page, execute myFunction 
var url=location.pathname;
var header     = document.querySelector("#header1");

var background = document.querySelector('.background');
// Get the header

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  var sticky = header.offsetTop;
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
if(url.split('/')[1].split('.')[0]==="index"){
window.onscroll = function() {myFunction();scroll();};
}
else{
  header.classList.add("sticky");
}


// 