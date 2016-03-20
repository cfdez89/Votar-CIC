/*
 *Carlos Fernandez Jimenez
*/
 
 /*
 *Setter login controller 
 */
 
(function(){
	'use strict';
	angular
		.module('votar')
	    .controller('noLoggedController', ['$scope','$location', 'userService', 'notificationService', 
	    function($scope, $location, userService, notificationService){
	    	
	    	var hideMenuBar = function(){
				$('.navbar-collapse').click('li', function(){
					$('.navbar-collapse').collapse('hide');
				});
			};	

			hideMenuBar();
	    	
		}]);	
})();



