angular.module('starter.controllers', [])

.controller('HomeCtrl', ['$http', function($http){
  var self = this;
  self.getTheses = function() {
    $http.get('http://www.kuai65.com/home.json').then(function(response) {
      self.theses = response.data;    
    },function(error){
      self.theses = [];    
    });
  }
  self.getTheses();
}])

.controller('ThesesIndexCtrl', ['$http', function($http){
  var self = this;
  self.getTheses = function() {
    $http.get('http://www.kuai65.com/samples.json').then(function(response) {
      self.theses = response.data;    
    },function(error){
      self.theses = [];    
    });
  }
  self.getTheses();
}])

.controller('ThesesShowCtrl', ['$http', '$stateParams', function($http, $stateParams){
  var self = this;
  self.showThesis = function(){
    $http.get('http://www.kuai65.com/samples/'+$stateParams.number+'.json').then(function(response) {
      self.thesis = response.data;
    },function(error){
      self.thesis = [];
    });
  }
  self.showThesis(); 
}])

.controller('PostsIndexCtrl', ['$http', function($http){
  var self = this;
  self.getPosts = function() {
    $http.get('http://www.kuai65.com/posts/mobile_index.json').then(function(response) {
      self.posts = response.data;
    },function(error){
      self.posts = [];
    });
  }
  self.getPosts();
}])

.controller('PostsShowCtrl', ['$http', '$stateParams', function($http, $stateParams){
  var self = this;
  self.showPost = function(){
    $http.get('http://www.kuai65.com/posts/'+$stateParams.number+'/mobile_show.json').then(function(response) {
      self.post = response.data;
    },function(error){
      self.post = [];
    });
  }
  self.showPost();
}])

.controller('UsersCtrl', ['$http', function($http){
}]);
