/*
 *Carlos Fernandez Jimenez
*/
 
(function(){
	'use strict';
	angular
		.module('votar')
	    .controller('startedCompetitionController', ['$scope', '$state', 'shareProjectService', 'competitionService', 'notificationService', 
	    function($scope, $state, shareProjectService, competitionService, notificationService){
	    	$scope.mdlTag   = "started";
			$scope.filters = 0; 
	    	
	    	/*Lista de las competencias disponibles*/
			$scope.competencias = [];

			var getAllCompetitions = function(){
				competitionService.getAllCompetition().then(function(pResp){
					$scope.competencias = pResp;
				});
			};

			getAllCompetitions();

			$scope.sendToProject = function(pId){
				var project = {
					id: pId
				};

				shareProjectService.setProject(project);
				$state.go('projects');
			}

		}]);	
})();