$(function (){
    // Init ScrollMagic
var ctrl = new ScrollMagic.Controller();

var tween =  new TimelineMax()
.from("#img1", 1, {top: 200, right: 300, rotation: -40, autoAlpha: 0})
.from("#sun", 0.5, {scale: 0, opacity: 0},"-=0.5")
.from(".primoT", 1.5, {top: 100, opacity: 0},"-=0.5");
    
    
var scene = new ScrollMagic.Scene({triggerElement: "#one", duration: 300})
					// animate color and top border in relation to scroll position
				.setPin("#one")
                .setTween(tween)// the tween durtion can be omitted and defaults to 1
				.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
				.addTo(ctrl);
    
    $(".player").YTPlayer();
});