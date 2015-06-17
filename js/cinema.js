$('.profile-button').each(function(i,elem){
    var button = $(elem);
    button.css('width', button.attr('width'));
    button.css('height', button.attr('height'));
    button.css('top', button.attr('top'));
    button.css('left', button.attr('left'));
    button.click(function() {
        alert(button.attr('name'));
    });
});