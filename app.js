(function(){
  var app=angular.module("myapp",[]);
  app.controller("mycontroller",function($scope){
    $scope.check = function() {
      if($scope.food == null){
        $scope.result="Please enter data first";
      }
      else{
      var str=$scope.food;
      var str_array = str.split(',');
      if(str_array.length <= 3){
        $scope.result="Enjoy!"
      }
      else{
        $scope.result="Too much!"
      }
    }
}

  });
})();
