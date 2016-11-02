/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController() {
  var vm = this;
  var DEFAULT_LIMIT = 65;
  
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
    }

  ]

  vm.select = function(podcast){
    vm.podcasts.forEach(function(cast){
      cast.selected = false;
    })

    vm.limit = DEFAULT_LIMIT;
    podcast.selected = true;
  }

  vm.more = function(){
    vm.limit = Number.MAX_SAFE_INTEGER;
    vm.moreClicked = true;
  }

  vm.less = function(){
    vm.limit = DEFAULT_LIMIT;
    vm.moreClicked = false;
  }

  vm.init = function(){
    vm.select(vm.podcasts[0]);
  }();
}

export default [ AppController ];
