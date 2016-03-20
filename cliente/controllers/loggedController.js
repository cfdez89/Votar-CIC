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
	    .controller('loggedController', ['$scope','$location', 'userService', 'shareSessionService', 'notificationService', 
	    function($scope, $location, userService, shareSessionService, notificationService){

	    	$scope.username = '';
	    	$scope.id = -1;

	    	$scope.teamProfile = [
                {
                    link: "teamProfile"
                }
            ];
		
			$scope.sesion = [
                {
                    name: "Cerrar Sesión",
                    link: "logout"
                }
            ];

            var getUserName = function() {
                if(shareSessionService.isStartSession()) {
                    var session = shareSessionService.getSession();
                    $scope.username = session.username;
                    $scope.id = session.id;
                }  
            };

            getUserName();
			
		}]);	
})();