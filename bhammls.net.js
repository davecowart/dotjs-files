function click(selector) {
  var button = $(selector);
  var link = button.parent('a');
  if (link.length === 0) return;
  var newLocation = link.attr('href');
  window.location.href = newLocation;
}
$(document).keydown(function(e) {
  if (e.keyCode === 37) {
    console.log('left');
    click("img[src='images/media_back_off.gif']");
  } else if (e.keyCode === 39) {
    console.log('right');
    click("img[src='images/media_forward_off.gif']");
  }
});
