$(document).ready(function(){
	function scrollToAnchor(a_href){
		$("a[href='#" + a_href + "']").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top - 60},'slow');
		});
	}

	scrollToAnchor('introduce');
	scrollToAnchor('about-me');
	scrollToAnchor('portfolio');
});