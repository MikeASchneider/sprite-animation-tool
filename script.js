var interval;
var img = 'url(vomit5.png)';
var height = 132;
var delay = 50;

function animateFrame(image, height, interval) {
  var currentPos = parseInt(image.css('background-position-y'));
  var nextPos = currentPos - height;
  //console.log(currentPos, nextPos, height);
  image.css('background-position-y', nextPos);
}

function animate(image, height, delay) {
  interval = setInterval(function() {
    animateFrame(image, height, interval);
  }, delay);
}


$(function() {
  var $spritebox = $('#sprite-box');
  $spritebox.css({
    backgroundImage: img,
    backgroundPosition: '0 0'
  });
  animate($spritebox, height, delay);

  //Bindings
  $('#delay').on('blur', function() {
    delay = $('#delay').val();
    clearInterval(interval);
    animate($spritebox, height, delay);
  });
  $('#img-url').on('blur', function() {
    img = 'url(' + $('#img-url').val() + ')';
    $('#sprite-box').css('background-image', img);
  });
  $('#height').on('blur', function() {
    height = $('#height').val();
    clearInterval(interval);
    $spritebox.css('height', height);
    animate($spritebox, height, delay);
  });
  $('#restart').on('click', function() {
    console.log('restarting animation');
    clearInterval(interval);
    $spritebox.css('background-position-y', 0);
    animate($spritebox, height, delay);
  });
});