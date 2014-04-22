define([
  "jquery",
  "requestAnimationFrame",
  "shortcut",
  "graphics",
  "clock",
  "Stats"
  ],
  function(
    ignore,
    ignore,
    shortcut,
    Graphics,
    ignore,
    Stats
  ) {

  var setupShortcuts = function() {
    shortcut.add("space", function() {
      Graphics.timeScale = Graphics.timeScale > 0.0 ?
        Graphics.timeScale = 0.0 : Graphics.timeScale = 1.0;
    });
  };

  var App = {

    stats: null,
    clock: null,

    init: function() {
      Graphics.init($("#webgl-canvas")[0]);
      this.clock = new Clock();
      setupShortcuts();

      // init stats
      this.stats = new Stats();
      this.stats.domElement.style.position = 'absolute';
      this.stats.domElement.style.top = '0px';
      this.stats.domElement.style.zIndex = 100;
      document.body.appendChild( this.stats.domElement );

      this.update();
    },

    update: function() {
      requestAnimationFrame(App.update);
      Graphics.update(App.clock.getDelta());
      App.stats.update();
    }

  };

  return App;
});