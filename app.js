(function(){
  var app=angular.module("myapp",[]);
  app.controller("mycontroller",function($scope){
    $scope.name="sowrabh" ;
    $scope.hello=function(){
      return "hello";
    }
  });
})();
