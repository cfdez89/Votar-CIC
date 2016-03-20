/*
 *Carlos Fernandez Jimenez
*/
 
(function(){
	'use strict';
	angular
		.module('votar')
	    .controller('finishedCompetitionController', ['$scope', '$state', 'competitionService', 'notificationService', 
	    function($scope, $state, competitionService, notificationService){
	    	$scope.mdlTag   = "finished";
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