
$('[data-target]').click( function (e) {
    var target = $($(this).attr('data-target'));
    target.load($(this).attr('href'));
    $('#banner').addClass('invisible');
    e.preventDefault(); // prevent anchor from changing window.location
});

Profile = {};
Profile.loadProfile = function(nome, main) {
		$.getJSON('profile-data.json', function(data) {
			$.get('perfil.html', function(template){
				var templateFunction = doT.template(template);
				var html = templateFunction(data[nome]);
				main.html(html);
			});
		});
}