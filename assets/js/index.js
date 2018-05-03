//Modal interaction
//Open modal
$('.modal-button').on('click', function(event) {
  $('.custom-modal').removeClass('not-showing');
  switch (true){
  case $(event.currentTarget).hasClass('skill1-button'):
      $('.skill1-modal').show();
      $('.skill2-modal').hide();
      $('.skill3-modal').hide();
      $('.skill4-modal').hide();
    break;

  case $(event.currentTarget).hasClass('skill2-button'):
      $('.skill1-modal').hide();
      $('.skill2-modal').show();
      $('.skill3-modal').hide();
      $('.skill4-modal').hide();
    break;

  case $(event.currentTarget).hasClass('skill3-button'):
      $('.skill1-modal').hide();
      $('.skill2-modal').hide();
      $('.skill3-modal').show();
      $('.skill4-modal').hide();
    break;

  case $(event.currentTarget).hasClass('skill4-button'):
      $('.skill1-modal').hide();
      $('.skill2-modal').hide();
      $('.skill3-modal').hide();
      $('.skill4-modal').show();
    break;  }
});

//close modal
$('.modal-background, .close-modal i').on('click', function(){
  $('.custom-modal').addClass('not-showing');
})

// Smooth scroll to a section
$('.nav-link').on('click', function(event) {
  var target = event.currentTarget.getAttribute('data-target');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 400)
});

// Show and hide text from box
$('.show-magic-box').on('mouseover', function(event) {
  var target = event.currentTarget.getAttribute('data-active-box');
  $('.' + target).addClass('magic-box-active');
})

$('.show-magic-box').on('mouseleave', function(event) {
  var target = event.currentTarget.getAttribute('data-active-box');
  $('.' + target).removeClass('magic-box-active');
})
