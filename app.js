var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
  $('.jumbotron').click(function() {
    $('.dropdown-menu').hide();
  });
};


$(document).ready(main);
