'use strict';

/**
 * @ngdoc filter
 * @name oyblogApp.filter:filters
 * @function
 * @description
 * # filters
 * Filter in the oyblogApp.
 */
angular.module('angularImagehoster')
  .filter('img_link', function () {
    return function (input) {
    	
//    	return input.toLowerCase().replace(/s+/g, '-').replace(/[^a-z0-9-]/ig,'');
        return "/img/"+input+"/";     
           
      
    };
  });