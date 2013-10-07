/*-----------------------------------------------------------------------------------*/
/*	jQuery for Pages
/*-----------------------------------------------------------------------------------*/

/* Table Of Content */
jQuery(document).ready(function($) {
	var flipbook = $('div.flipbook');
	//console.log('start jq');
	flipbook.find('div.page-content div.preview-content.toc ul.toc li').hover(function(){ 
		console.log('hover');
		$(this).find('http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/book/js/span.number, span.text').clearQueue();
		$(this).find('http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/book/js/span.number, span.text').animate( { backgroundColor: '#892667' }, 200);
	}, function() {
		//$(this).find('http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/book/js/span.number, span.text').clearQueue();
		$(this).find('http://www.thuviengiaoduc.org/file/learn/child/stories_with_famous_people/dungchung/book/js/span.number, span.text').animate( { backgroundColor: '#A6B0BB' }, 200);
	});
});
