/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController($http) {
  var vm = this;
  var DEFAULT_LIMIT = 65;

  vm.isRetina = function () {
    return (window.devicePixelRatio > 1 ||
      (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)
    )
  };

  vm.isMobile = function () {
    return (window.devicePixelRatio < 1 ||
      (window.matchMedia && window.matchMedia("(-webkit-device-pixel-ratio: 0.5),(-moz-device-pixel-ratio: 0.5),(device-pixel-ratio: 0.5)").matches)
    )
  };

  vm.select = function (podcast) {
    vm.podcasts.forEach(function (cast) {
      cast.selected = false;
    })

    vm.limit = DEFAULT_LIMIT;
    podcast.selected = true;
  }

  vm.heroListen = function () {
    let podcast = vm.podcasts[0];
    vm.select(podcast);
    vm.listen(podcast);
  }

  vm.listen = function (podcast) {
    vm.podcasts.forEach(function (cast) {
      vm.pause(cast);
    })
    let audio = document.getElementById("audio_" + podcast.id);
    podcast.playing = true;
    audio.play();
  }

  vm.pause = function (podcast) {
    let audio = document.getElementById("audio_" + podcast.id);
    podcast.playing = false;
    audio.pause();
  }

  vm.more = function () {
    vm.limit = Number.MAX_SAFE_INTEGER;
    vm.moreClicked = true;
  }

  vm.less = function () {
    vm.limit = DEFAULT_LIMIT;
    vm.moreClicked = false;
  }

  vm.init = function () {    
    $http.get('src/podcasts.json').success(function(podcasts){
      vm.podcasts = podcasts;
      vm.select(vm.podcasts[0]);
    })
  } ();


}

export default ['$http', AppController];
