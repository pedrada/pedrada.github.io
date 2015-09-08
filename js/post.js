$('a[target="content"]').each(function(){
	var href= $(this).attr('href');
    $(this).attr('href','javascript:void(0);');
    $(this).attr('jshref',href);
});


$('a[target="content"]').click(function(){
      $('#content').load($(this).attr('jshref'));
	  document.title += "#"+this.href;
	  console.info(this.target);
	  $('html, body').animate({ scrollTop: 0 }, 'slow');
});