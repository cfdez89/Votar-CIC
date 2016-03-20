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
	    .controller('logoutController', ['$scope', '$state', 'userService',, 
	    function($scope, $state, userService){
            
            var sendToLogin = function() {
            	$state.go('login');
            };

			var logout = function() {
				//shareSessionService.deleteSession();
				sendToLogin();
			};

			logout();
			
		}]);	
})();