'use strict';

angular.module('angularImagehoster')
  .controller('MainCtrl', function ($scope,FileUploader,$resource) {
	  	  	  
	  $scope.sex='female';
	  $scope.age=25;
	  $scope.topic='sex';
	  var uploader =  $scope.uploader = new FileUploader({url:'http://localhost:8000/upload',removeAfterUpload:true }); 
	  	  
		var Character = $resource("http://localhost\\:8000/api/:id", {
			id : '@id'
		}, {});
		
		$scope.characters = Character.query();
		
	  	  
	  uploader.onCompleteAll = function() {
         
          $scope.characters = Character.query();          
          
      };
      
      uploader.onBeforeUploadItem = function(item) {
    	  
    	  var formData = [{
    	        age: $scope.age,
    	    },{
    	    	sex: $scope.sex,
    	    },{
    	    	topic :  $scope.topic,
    	    }];
    	    Array.prototype.push.apply(item.formData, formData);
    	     	  

    	};
      	  	  
  });
