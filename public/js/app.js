$(document).ready(function(){
  // For  dropdown photos 
  $('.dropdown-submenu a.linkdrop').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
//  For animation with wow 
  new WOW().init();
});