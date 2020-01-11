const flightPath = {
    curviness:1.25,
    autoRotate: true, //this is used for specific motion that makes object rotate automatically
    values:[
        {x:100,y:-20// this means that the animation will be going to x:100 and y -20(which is directed towards upper side)
        },{x:300,y:10},{x:500,y:100},{x:750,y:-100},{x:350,y:-50},{x:600,y:100},{x:800,y:0},
        {x:window.innerWidth,y:-250} //"window.innerWidth" means the whole viewpoint   
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.plane',1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);



