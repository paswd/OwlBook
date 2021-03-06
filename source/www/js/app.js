// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tests', {
    url: '/tests',
    views: {
      'menuContent': {
        templateUrl: 'templates/tests.html',
        controller: 'TestsCtrl'
      }
    }
  })
  .state('app.test1', {
    url: '/tests/test1.html',
    views: {
      'menuContent': {
        templateUrl: 'templates/test1.html',
        controller: 'Test1Ctrl'
      }
    }
  })
  .state('app.test2', {
    url: '/tests/test2.html',
    views: {
      'menuContent': {
        templateUrl: 'templates/test2.html',
        controller: 'Test2Ctrl'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  })

  .state('app.notes', {
      url: '/notes',
      views: {
        'menuContent': {
          templateUrl: 'templates/notes.html'
        }
      }
    })
  .state('app.stats', {
      url: '/stats',
      views: {
        'menuContent': {
          templateUrl: 'templates/stats.html',
          controller: 'StatsCtrl'
        }
      }
    })
  .state('app.videos', {
      url: '/videos',
      views: {
        'menuContent': {
          templateUrl: 'templates/videos.html',
          controller: 'VideosCtrl'
        }
      }
    })
  .state('app.video1', {
      url: '/videos/video1.html',
      views: {
        'menuContent': {
          templateUrl: 'templates/video1.html',
          controller: 'Video1Ctrl'
        }
      }
    })
  .state('app.video2', {
      url: '/videos/video2.html',
      views: {
        'menuContent': {
          templateUrl: 'templates/video2.html',
          controller: 'Video2Ctrl'
        }
      }
    })
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
    .state('app.library', {
      url: '/library',
      views: {
        'menuContent': {
          templateUrl: 'templates/library.html',
          controller: 'LibraryCtrl'
        }
      }
    })

  .state('app.book1', {
    url: '/library/book1.html',
    views: {
      'menuContent': {
        templateUrl: 'templates/book1.html',
        controller: 'BookCtrl'
      }
    }
  })

  .state('app.book2', {
    url: '/library/book2.html',
    views: {
      'menuContent': {
        templateUrl: 'templates/book2.html',
        controller: 'BookCtrl'
      }
    }
  })

  .state('app.result', {
    url: '/result',
    views: {
      'menuContent': {
        templateUrl: 'templates/result.html',
        controller: 'ResultCtrl'
      }
    }
  })

  .state('app.exit', {
    url: '/exit',
    views: {
      'menuContent': {
        controller: 'ExitCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/library');
});
