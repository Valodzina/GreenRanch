$(function() {
    $('.rev_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed:4000,
        arrows:false,
        
    })
})

$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });

});



let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}



function backtoTop () {
    let button =$('.backtobegin');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >=100) {
            button.fadeIn()
        } else {
            button.fadeOut();
        }
      

    } );
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop :0}, 700);

    });
};

backtoTop();

