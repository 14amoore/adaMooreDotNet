$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 8800) {
      $('body').addClass('changeColor9');
    }
    if ($(this).scrollTop() < 8800) {
      $('body').removeClass('changeColor9');
    }
    if ($(this).scrollTop() > 7700) {
      $('body').addClass('changeColor8');
    }
    if ($(this).scrollTop() < 7700) {
      $('body').removeClass('changeColor8');
    }
    if ($(this).scrollTop() > 6600) {
      $('body').addClass('changeColor7');
    }
    if ($(this).scrollTop() < 6600) {
      $('body').removeClass('changeColor7');
    }
    if ($(this).scrollTop() > 5600) {
      $('body').addClass('changeColor6');
    }
    if ($(this).scrollTop() < 5600) {
      $('body').removeClass('changeColor6');
    }
    if ($(this).scrollTop() > 4500) {
      $('body').addClass('changeColor5');
    }
    if ($(this).scrollTop() < 4500) {
      $('body').removeClass('changeColor5');
    }
    if ($(this).scrollTop() > 3500) {
      $('body').addClass('changeColor4');
    }
    if ($(this).scrollTop() < 3500) {
      $('body').removeClass('changeColor4');
    }
    if ($(this).scrollTop() > 2350) {
      $('body').addClass('changeColor3');
    }
    if ($(this).scrollTop() < 2350) {
      $('body').removeClass('changeColor3');
    }
    if ($(this).scrollTop() > 1550) {
      $('body').addClass('changeColor2');
    }
    if ($(this).scrollTop() < 1550) {
      $('body').removeClass('changeColor2');
    }
    if ($(this).scrollTop() > 500) {
      $('body').addClass('changeColor');
    }
    if ($(this).scrollTop() < 500) {
      $('body').removeClass('changeColor');
    }
  });
});
