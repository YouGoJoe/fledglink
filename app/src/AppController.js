/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController() {
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

  vm.podcasts = [
    {
      id: 1,
      title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
      hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
      tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
      source: './podcasts/Ep1 - Productivity _RAW.mp3',
    },
    {
      id: 2,
      title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
      hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
      tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
      source: './podcasts/Ep2 - Gated Content - Compressed.mp3',
    },
    {
      id: 3,
      title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
      hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
      tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
      source: '',
    },
    // {
    //   id: 9,
    //   title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
    //   hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    //   Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
    //   tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
    //   source: '',
    // },
    // {
    //   id: 10,
    //   title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
    //   hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    //   Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
    //   tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
    //   source: '',
    // },
    // {
    //   id: 11,
    //   title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
    //   hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    //   Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
    //   tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
    //   source: '',
    // },
    // {
    //   id: 12,
    //   title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
    //   hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    //   Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
    //   tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
    //   source: '',
    // },
    // {
    //   id: 13,
    //   title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
    //   hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    //   Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
    //   tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
    //   source: '',
    // },
    // {
    //   id: 14,
    //   title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
    //   hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    //   Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
    //   tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
    //   source: '',
    // },
    // {
    //   id: 15,
    //   title: 'Punny Podcast Title, Padded For Length So That We Can See How A Long Title Looks',
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices erat nec erat condimentum, 
    //   hendrerit feugiat nibh mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    //   Cras volutpat, ligula et viverra convallis, magna ligula molestie est, in vestibulum nunc ex nec justo. Donec erat libero, 
    //   tincidunt vitae orci non, dignissim pretium sem. Nunc sit amet faucibus odio. Sed`,
    //   source: '',
    // },

  ]

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
    vm.select(vm.podcasts[0]);
  } ();


}

export default [AppController];
