$(function() {
  var projectLink = $($('#breadcrumbs li.item')[1]).find('a').attr('href');
  if (projectLink) {
    $('#breadcrumbs').append('<li class="item" style="margin-left:100px"><a href="' + projectLink + 'lastBuild/console">Current Output Log</a></li>').append('<li class="separator"></li>');
  }
});

