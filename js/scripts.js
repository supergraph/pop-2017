
var init;

init = function() {
  $('input[type=radio]').change(function() {
    var url;
    if ($(this).is(':checked')) {
      url = $(this).data('href');
      return window.location = url;
    }
  });
  $('a.more').click(function() {
    var truncated_description;
    truncated_description = $(this).parent();
    truncated_description.addClass('invisible');
    return truncated_description.next().removeClass('invisible');
  });
  $('a.less').click(function() {
    var description;
    description = $(this).parent();
    description.addClass('invisible');
    return description.prev().removeClass('invisible');
  });
  $('.videobutton').click(function() {
    var url;
    $('.modal-title').html($(this).data('title'));
    url = 'http://www.youtube.com/embed/' + $(this).data('id');
    $('iframe').attr('src', url);
    return $('#videomodal').modal();
  });
  return $('#videomodal').on('hide.bs.modal', function() {
    return $('iframe').attr('src', '');
  });
};

$(document).ready(init);
