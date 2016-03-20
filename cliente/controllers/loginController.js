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
	    .controller('loginController', ['$scope', '$state', 'userService', 'shareSessionService', 'notificationService', 
	    function($scope, $state, userService, shareSessionService, notificationService){
		
			$scope.userData = {
				username: '',
				password: ''
			};

			var sendToCompetition = function(){
				$state.go('home2');
			};

			var validUser = function(pData){
				if(pData.message === 'Exitoso'){
				    shareSessionService.setSession(pData.params); 
					var message = 'Bienvenido '+pData.params.username+' acá podés votar!';
                    notificationService.showSuccess(message);
					sendToCompetition();
				}
				else {
					notificationService.showError(pData.message);
				}
			};

			var login = function(pData){
				 var data = userService.login(pData);
					data.error ? notificationService.showError(data.message) : validUser(data);
			};

			$scope.validData = function(pIsValid, pData){
				if(pIsValid){
					login(pData);
				}
				else {
					var message = 'Debe completar todos los campos solicitados.';
					notificationService.showWarning(message);
				}
			};
			
		}]);	
})();