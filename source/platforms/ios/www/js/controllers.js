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
    { title: 'Алгебра логики', id: 1 }
  ];
})

.controller('BookCtrl', function($scope, $stateParams) {
})

.controller('TestsCtrl', function($scope) {
  $scope.tests = [
    { title: 'Алгебра логики', id: 1 }
  ];
})

.controller('TestCtrl', function($scope, $stateParams) {
  $scope.TestCheck = function() {
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
    window.localStorage['TestMark'] = mark;
    window.localStorage['TestCnt'] = cnt;
    //alert("Правильных ответов: " + cnt + "/8. Оценка " + $scope.mark);
    //window.location = "/#/app/result";
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
  $scope.TestCnt = window.localStorage['TestCnt'];
  $scope.TestMark = window.localStorage['TestMark'];
})

.controller('ExitCtrl', function($scope, $stateParams) {
  ionic.Platform.exitApp();
});