var $ = require('jquery');

$(function(){
  $('.button').hover(function(){
    $(this).parent().siblings('.value').css('background-color','#475bf1');
  }, function(){
    $(this).parent().siblings('.value').css('background-color', '#5b6ceb')
  });
