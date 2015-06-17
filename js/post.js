
$('[data-target]').click( function (e) {
    var target = $($(this).attr('data-target'));
    target.load($(this).attr('href'));
    $('#banner').addClass('invisible');
    e.preventDefault(); // prevent anchor from changing window.location
});