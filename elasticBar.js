//Note: line height is set to match navigation_height and navigation_min_height respectivly
navigation_height = 100
navigation_min_height = 60
$(window).scroll(function(){
if(($('body').scrollTop()>=-20) && ($('body').scrollTop()<=40) ){
	var s = $('body').scrollTop();
	console.log(s);
	$('#navigation').stop().animate({
            height:navigation_height-s,
    },75);
	//Elements under navigation bar fix
	$('#nextElementFix').stop().animate({
			paddingTop:navigation_height-s
    },75);
	$('#navigation li a').stop().animate({
			height:navigation_height-s,
			lineHeight:navigation_height-s,
    },75);
}
if(($('body').scrollTop()>=-20) && ($('body').scrollTop()>=40) ){
	var s = $('body').scrollTop();
	$('#navigation').stop().animate({
            height:navigation_min_height
        },75);
	$('#navigation li a').stop().animate({
			height:navigation_min_height,
			lineHeight:navigation_min_height,
        },75);
}
});
