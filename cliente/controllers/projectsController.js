/*
 *Carlos Fernandez Jimenez
*/
 
 /*
 *Setter home controller 
 */
 
(function(){
	'use strict';
	angular
		.module('votar')
	    .controller('projectsController', ['$scope','$state', 'competitionService', 'shareProjectService', 'notificationService', 
	    function($scope, $state, competitionService, shareProjectService, notificationService){

	    	/* tags disponibles para filtrar */
			$scope.tagOptions = ['do', 'duis', 'nada'];

			/*Tag seleccionado para filtar*/
			$scope.selectedTag = $scope.tagOptions[0]; 
			/*Lista de las competencias disponibles*/
			$scope.competenciaActual = {};
			/*Lista de las proyectos disponibles*/
			$scope.projects = [];

			var getCompetition = function(pId){
				competitionService.getCompetition(pId).then(function(pResp){
					$scope.competenciaActual = pResp;
				});
			};

			var getAllProjects = function(pId){
				competitionService.getAllProjects(pId).then(function(pResp){
					console.log(pResp);
					$scope.projects = pResp;
				});
			};

			$scope.sendToProject = function(pId){

				var project = {
					id: pId
				};

				shareProjectService.setProjectDetail(project);
				$state.go('project');
			}

			var projectData = shareProjectService.getProject();
			getCompetition(projectData.id);
			getAllProjects(projectData.id);


		}]);	
})();