/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController($http, $mdDialog) {
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

  vm.more = function (podcast) {
    vm.limit = Number.MAX_SAFE_INTEGER;
    podcast.moreClicked = true;
  }

  vm.less = function (podcast) {
    vm.limit = DEFAULT_LIMIT;
    podcast.moreClicked = false;
  }

  vm.subscribe = function () {
    return $mdDialog.show({
      escapeToClose: true,
      template: 
      '<md-dialog layout-margin>' +
      '<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">' +
      '<div id="mc_embed_signup">' +
      '<form action="//willcampbell.us14.list-manage.com/subscribe/post?u=cf6f920dc383d69ab586431d3&amp;id=68776a37b7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>' +
      '<div id="mc_embed_signup_scroll">' +
      '<label for="mce-EMAIL">Subscribe to Fledglink to get notified of new episodes!</label>' +
      '<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required style="margin-right:8px;">' +
      '<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cf6f920dc383d69ab586431d3_68776a37b7" tabindex="-1" value=""></div>' +
      '<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button subscribe-btn"></div>' +
      '<div layout="row" layout-align="end center" style="margin-top:16px;"><a ng-click="cancel()" style="cursor:pointer;">Cancel</a></div>' +
      '</div>' +
      '</form>' +
      '</div>' +
      '</md-dialog>',
      controller: function($mdDialog, $scope){
        $scope.cancel = function(){
          $mdDialog.cancel();
        }
      }
    });
  }

  vm.init = function () {
    $http.get('src/podcasts.json').success(function (podcasts) {
      vm.podcasts = podcasts;
      vm.select(vm.podcasts[0]);
    })
  };

  vm.init();

}

export default ['$http', '$mdDialog', AppController];
