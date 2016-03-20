/*
 *Carlos Fernandez Jimenez
*/
 
 /*
 *Setter index controller
 */
 
(function(){
	'use strict';
	angular
		.module('votar')
	    .controller('indexController', ['$scope','$location', function($scope, $location){
			
			var hideMenuBar = function(){
				$('.navbar-collapse').click('li', function() {
					$('.navbar-collapse').collapse('hide');
				});
			};

			$scope.showLogin = function(){
				$location.path('/login').replace();
			};

			hideMenuBar();

		}]);	
})();