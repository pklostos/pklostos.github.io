var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
  $('body > div:not(.nav)').click(function() {
    $('.dropdown-menu').hide();
  });
};


$(document).ready(main);
