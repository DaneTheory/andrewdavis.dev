//FITTEXT
jQuery("#mainHero").fitText(1.2, { minFontSize: '24px', maxFontSize: '135px' });
jQuery("#subHero").fitText(1.2, { minFontSize: '16px', maxFontSize: '110px' });
jQuery("#heroButton").fitText(1.2, { minFontSize: '16px', maxFontSize: '110px' });

//Animated Text API
$('.tlt').textillate({ in: { effect: 'fadeInLeft' } });
$('.readMore').textillate({
  // the default selector to use when detecting multiple texts to animate
  selector: '.readMore',

  // enable looping
  loop: true,

  // sets the minimum display time for each text before it is replaced
  minDisplayTime: 2000,

  // sets the initial delay before starting the animation
  // (note that depending on the in effect you may need to manually apply 
  // visibility: hidden to the element before running this plugin)
  initialDelay: 600,

  // set whether or not to automatically start animating
  autoStart: true,

  // custom set of 'in' effects. This effects whether or not the 
  // character is shown/hidden before or after an animation  
  inEffects: [],

  // custom set of 'out' effects
  outEffects: [ 'flash' ],

  // in animation settings
  in: {
    // set the effect name
    effect: 'fadeInDown',

    // set the delay factor applied to each consecutive character
    delayScale: 1.9,

    // set the delay between each character
    delay: 80,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence 
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,

    // reverse the character sequence 
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () {}
  },

  // out animation settings.
  out: {
    effect: 'flash',
    delayScale: 0,
    delay: 0,
    sync: false,
    shuffle: true,
    reverse: true,
    callback: function () {}
  },

  // callback that executes once textillate has finished 
  callback: function () {}
});



//PARTICLE PLUGIN API
particlesJS('particleBG', {
  particles: {
    color: '#80A1A6',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 0.75,
    size: 15,
    size_random: true,
    nb: 125,
    line_linked: {
      enable_auto: true,
      distance: 150,
      color: '#A1BBBD',
      opacity: 0.9,
      width: 2,
      condensed_mode: {
        enable: true,
        rotateX: 65000,
        rotateY: 65000
      }
    },
    anim: {
      enable: true,
      speed: 1.5
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 400
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: 0.5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 7
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});