$(function(){
	var carouselList=$("#carousel ul");
	//setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.stop().animate({'marginLeft':"-600px"},800,moveFirstSlide);
	};
	
	function moveFirstSlide() {
		var firstItem=carouselList.find('li:first');
		var lastItem=carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
    nextSlide.on('click', nextClickFunc);
	};
	

	function moveLastSlide() {
		var firstItem=carouselList.find('li:first');
		var lastItem=carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-600});
	};
	function changeSlidePrev() {
    moveLastSlide();
		carouselList.stop().animate({'marginLeft':0},800, function(){
      prevSlide.on('click', prevClickFunc);
    });
	};
	

	var nextSlide = $(".next");
	var nextClickFunc = function(){
    nextSlide.off('click');
    changeSlide();
  }
	nextSlide.on('click', nextClickFunc);

	var prevSlide = $(".prev");
	var prevClickFunc = function(){
    prevSlide.off('click');
    changeSlidePrev();
  }
	prevSlide.on('click', prevClickFunc);	
});