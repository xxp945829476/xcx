

window.onload = function(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.swiper-pagination',
	    paginationClickable: true,
	    effect : 'fade',
		fade: {
		  crossFade: false,
		},
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	    autoplay : 3000,
	    loop:true
	})
}