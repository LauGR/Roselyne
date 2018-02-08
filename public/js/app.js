$(document).ready(function(){
  $('.dropdown-submenu a.linkdrop').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});