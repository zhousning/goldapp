angular.module('starter.filters', [])

.filter('trustHtml', ['$sce', function($sce){
  return function(input){
    return $sce.trustAsHtml(input);
  }
}]);
