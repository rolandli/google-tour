var index=1;
var slideWidth= $(".slide").width()+15;
var ready=true;
$( document ).ready(function() {
  //$(".slide").hide();
  $(".slide:first-child").addClass("selected");
  $(".selected").show();
  $(".slide:not('.selected')").css("left", slideWidth);
  $(".next").click(function(){
	if(ready){
      next();
	}
  })
  $(".previous").click(function(){
	if(ready){
      previous();
	}
  })
});

function next(){
	index++;
	ready=false;
	$(".selected").animate({left:-slideWidth},'slow',function(){
		$(".slide:not('.selected')").css({"left":slideWidth});
	});
	
	$(".selected").removeClass("selected");
	$(".slide:nth-child("+index+")").addClass("selected");
	$(".selected").animate({left:0},'slow',function(){
		ready=true;
	});
	if(index>8){
		index=0;
	}
}
function previous(){
	index--;
	ready=false;
	$(".selected").animate({left:-slideWidth},'slow',function(){
		$(".slide:not('.selected')").css({"left":slideWidth, });
	});
	
	$(".selected").removeClass("selected");
	if(index<1){
	  index=8;
	}
	$(".slide:nth-child("+index+")").addClass("selected");
	$(".selected").animate({left:0},'slow',function(){
		ready=true;
	});

}
