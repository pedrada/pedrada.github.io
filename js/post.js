$('a[target="content"]').click(function(){
      $('#content').load(this.href);
	  document.title += "#"+this.href;
      this.href='Javascript: void()';
})