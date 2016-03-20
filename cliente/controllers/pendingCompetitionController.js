/*
 *Carlos Fernandez Jimenez
*/
 
(function(){
	'use strict';
	angular
		.module('votar')
	    .controller('pendingCompetitionController', ['$scope', '$state', 'competitionService', 'notificationService', 
	    function($scope, $state, competitionService, notificationService){
	    	$scope.mdlTag   = "pending";
			$scope.filters = 0; 
	    	
	    	/*Lista de las competencias disponibles*/
			$scope.competencias = [];

			var getAllCompetitions = function(){
				competitionService.getAllCompetition().then(function(pResp){
					$scope.competencias = pResp;
				});
			};

			getAllCompetitions();

		}]);	
})();