angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LibraryCtrl', function($scope) {
  $scope.library = [
    { title: 'Алгебра логики', id: 1 },
    { title: 'Системы счистления', id: 2 }
  ];
})

.controller('BookCtrl', function($scope, $stateParams) {
})

.controller('TestsCtrl', function($scope) {
  $scope.tests = [
    { title: 'Алгебра логики', id: 1 },
    { title: 'Системы счистления', id: 2 }
  ];
})

.controller('VideosCtrl', function($scope) {
  $scope.videos = [
    { title: 'Алгебра логики', id: 1 },
    { title: 'Системы счистления', id: 2 }
  ];
})

.controller('Video1Ctrl', function($scope, $stateParams) {
})
.controller('Video2Ctrl', function($scope, $stateParams) {
})

.controller('Test1Ctrl', function($scope, $stateParams) {
  $scope.Test1Check = function() {
    var cnt = 0;
    $scope.TestName = "Алгебра логики";
    if ($scope.question1 == 4) cnt++;
    if ($scope.question2 == 4) cnt++;
    if ($scope.question3 == 2) cnt++;
    if ($scope.question4 == 2) cnt++;
    if ($scope.question5 == 3) cnt++;
    if ($scope.question6 == 5) cnt++;
    if ($scope.question7 == 2) cnt++;
    if ($scope.question8 == 4) cnt++;
    var mark;
    if (cnt > 6) {
      mark = 5;
    } else if (cnt > 4) {
      mark = 4;
    } else if (cnt > 2) {
      mark = 3;
    } else {
      mark = 2;
    }
    window.localStorage['NowTestMark'] = mark;
    window.localStorage['NowTestRight'] = cnt;
    window.localStorage['NowQuestionsCount'] = 8;
    
    if (window.localStorage['Test1AppemptsCount'] == null) {
      window.localStorage['Test1AppemptsCount'] = 1;
    } else {
      window.localStorage['Test1AppemptsCount']++;
    }
    if (mark > window.localStorage['Test1Mark'] || window.localStorage['Test1Mark'] == null) {
      window.localStorage['Test1Mark'] = mark;
    }
    if (cnt > window.localStorage['Test1Right'] || window.localStorage['Test1Right'] == null) {
      window.localStorage['Test1Right'] = cnt;
    }
  };
})

.controller('Test2Ctrl', function($scope, $stateParams) {
  $scope.Test2Check = function() {
    var cnt = 0;
    $scope.TestName = "Алгебра логики";
    if ($scope.question1 == 1) cnt++;
    if ($scope.question2 == 2) cnt++;
    if ($scope.question3 == 3) cnt++;
    if ($scope.question4 == 1) cnt++;
    if ($scope.question5 == 3) cnt++;
    if ($scope.question6 == 4) cnt++;
    if ($scope.question7 == 2) cnt++;
    if ($scope.question8 == 1) cnt++;
    if ($scope.question9 == 4) cnt++;
    if ($scope.question10 == 3) cnt++;
    var mark;
    if (cnt > 8) {
      mark = 5;
    } else if (cnt > 6) {
      mark = 4;
    } else if (cnt > 4) {
      mark = 3;
    } else {
      mark = 2;
    }
    window.localStorage['NowTestMark'] = mark;
    window.localStorage['NowTestRight'] = cnt;
    window.localStorage['NowQuestionsCount'] = 10;

    if (window.localStorage['Test2AppemptsCount'] == null) {
      window.localStorage['Test2AppemptsCount'] = 1;
    } else {
      window.localStorage['Test2AppemptsCount']++;
    }
    if (mark > window.localStorage['Test2Mark'] || window.localStorage['Test2Mark'] == null) {
      window.localStorage['Test2Mark'] = mark;
    }
    if (cnt > window.localStorage['Test2Right'] || window.localStorage['Test2Right'] == null) {
      window.localStorage['Test2Right'] = cnt;
    }
  };
})

.controller('SettingsCtrl', function($scope, $stateParams) {
  //$scope.theme = {};

  $scope.SetSettings = function() {
    //alert("Тема: " + $scope.theme);
  }; 
})

.controller('ResultCtrl', function($scope, $stateParams) {
  //alert("Правильных ответов: " + $scope.TestCnt + "/8. Оценка " + $scope.TestMark);
  $scope.NowTestRight = window.localStorage['NowTestRight'];
  $scope.NowTestMark = window.localStorage['NowTestMark'];
  $scope.NowQuestionsCount = window.localStorage['NowQuestionsCount'];
})

.controller('StatsCtrl', function($scope, $stateParams) {
  
  if (window.localStorage['Test1AppemptsCount'] == null) {
    window.localStorage['Test1AppemptsCount'] = 0;
  }
  if (window.localStorage['Test2AppemptsCount'] == null) {
    window.localStorage['Test2AppemptsCount'] = 0;
  }

  $scope.Test1Right = window.localStorage['Test1Right'];
  $scope.Test1Mark = window.localStorage['Test1Mark'];
  $scope.Test2Right = window.localStorage['Test2Right'];
  $scope.Test2Mark = window.localStorage['Test2Mark'];
  $scope.Test1AppemptsCount = window.localStorage['Test1AppemptsCount'];
  $scope.Test2AppemptsCount = window.localStorage['Test2AppemptsCount'];

  if ($scope.Test1AppemptsCount == 0) {
    $scope.Test1Right = '-';
    $scope.Test1Mark = '-';
  }
  if ($scope.Test2AppemptsCount == 0) {
    $scope.Test2Right = '-';
    $scope.Test2Mark = '-';
  }

})

.controller('ExitCtrl', function($scope, $stateParams) {
  ionic.Platform.exitApp();
});