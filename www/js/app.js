// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', '$stateProvider', '$urlRouterProvider', function($ion, $stateProvider, $urlRouterProvider){
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/home/tabs.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('tab.home',{
      url: '/home',
      views: {
        'home-tab':{
          templateUrl: 'templates/home/index.html',
          controller: 'HomeCtrl',
          controllerAs: 'index'
        }
      }
    })
    .state('tab.theses',{
      url: '/theses',
      views: {
        'theses-tab':{
          templateUrl: 'templates/theses/index.html',
          controller: 'ThesesIndexCtrl',
          controllerAs: 'index'
        }
      }
    })
    .state('tab.thesis-show', {
      url: '/theses/:number',
      views: {
        'theses-tab':{
          templateUrl: 'templates/theses/show.html',
          controller: 'ThesesShowCtrl',
          controllerAs: 'show'
        }
      }
    })
    .state('tab.posts',{
      url: '/posts',
      views: {
        'posts-tab':{
          templateUrl: 'templates/posts/index.html',
          controller: 'PostsIndexCtrl',
          controllerAs: 'index'
        }
      }
    })
    .state('tab.post-show', {
      url: '/posts/:number',
      views: {
        'posts-tab':{
          templateUrl: 'templates/posts/show.html',
          controller: 'PostsShowCtrl',
          controllerAs: 'show'
        }
      }
    })
    .state('tab.users',{
      url: '/users',
      views: {
        'users-tab':{
          templateUrl: 'templates/users/index.html',
          controller: 'UsersCtrl',
          controllerAs: 'index'
        }
      }
    });
    $urlRouterProvider.otherwise('/tab/home');
    $ion.tabs.position('bottom');
}]);
