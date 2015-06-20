$('.profile-button').each(function(i,elem){
    var button = $(elem);
    button.css('width', button.attr('width'));
    button.css('height', button.attr('height'));
    button.css('top', button.attr('top'));
    button.css('left', button.attr('left'));
    button.click(function() {
		var nome = $(this).attr("name");
		var main = $(this).parent().parent();
		$.getJSON('profile-data.json', function(data) {
			$.get('perfil.html', function(template){
				var templateFunction = doT.template(template);
				var html = templateFunction(data[nome]);
				main.html(html);
			});
		});
    });
});