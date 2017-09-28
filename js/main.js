$(function (){
  var controller = new ScrollMagic.Controller();

  
    var tween = TweenMax.to('#animation', 0.5, {
    backgroundColor: 'rgb(255, 39, 46)',
    scale: 5,
    rotation: 360
  });
    var tween2 = TweenMax.from('#prima2', 0.5, {
    backgroundColor: 'rgb(255, 39, 46)',
    left: -400,
        bottom:-200,
    rotation: 40,
        opacity: 0
  });
    var tween3 = TweenMax.from('.primoT', 0.5, {
        autoAlpha: 0,
        scale: 0.5,
        y: '+=50',
        ease:Linear.easeNone
        
    });
    var tween4 = TweenMax.from('#sun', 0.5, {
        autoAlpha: 0,
        scale: 0.5,
        ease:Linear.easeNone
        
    })

  var containerScene = new ScrollMagic.Scene({
      triggerElement: '#scene',
      offset: 100,
      duration: 400
    })
    .setTween(tween2)
    .setPin('#prima2')
    .addIndicators();
    
    var containerTesto = new ScrollMagic.Scene({
      triggerElement: '#scene',
      offset: 100,
      duration: 400
    })
    .setTween(tween3);
    
    var sun = new ScrollMagic.Scene({
      triggerElement: '#scene',
      offset: 100,
      duration: 400
    })
    .setTween(tween4)
    .addIndicators({name: "sun (duration: 200)"});

    
    
    controller.addScene([
        containerScene,
        containerTesto,
        sun
    ]);
    
    $(".player").YTPlayer();
});