'use strict';

angular.module('angularImagehoster')
  .controller('MainCtrl', function ($scope,FileUploader,$resource) {
	  $scope.uploader = new FileUploader({url:'http://localhost:8000/upload'});
	  
	  
		var Character = $resource("http://localhost\\:8000/api/:id", {
			id : '@id'
		}, {});
		
		$scope.characters = Character.query();
	  
	  
	  
	  
  });
