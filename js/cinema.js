
$('.profile-button').each(function(i,elem){
    var button = $(elem);
    button.css('width', button.attr('width'));
    button.css('height', button.attr('height'));
    button.css('top', button.attr('top'));
    button.css('left', button.attr('left'));
    button.click(function() {
		var name = $(this).attr("name");
		if (name == "valente") {
			$('#main').load('sobre.html');
		} else if (name == "victorale") {
			alert("2016 nos cinemas!");
		} else {
			Profile.loadProfile(name, $(this).parent().parent());
		}
    });
});
