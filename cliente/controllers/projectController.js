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
	    .controller('projectController', ['$scope','$state', 'competitionService', 'shareProjectService', 'notificationService', 
	    function($scope, $state, competitionService, shareProjectService, notificationService){

	    	/* tags disponibles para filtrar */
			$scope.tagOptions = ['do', 'duis', 'nada'];

			/*Tag seleccionado para filtar*/
			$scope.selectedTag = $scope.tagOptions[0]; 
			/*proyecto*/
			$scope.project = {};
			$scope.images = [
			{ 
				thumb: 
"http://placehold.it/1000x1000",
			    img: 
"http://placehold.it/1000x1000",
				description: 'imagen 1'

			}
			];



			var getProject = function(pId, pId2){
				competitionService.getProject(pId, pId2).then(function(pResp){
					$scope.project = pResp;
					console.log(pResp);
				});
				/*
				for(var i= 0 ; i< $scope.project.images.length; i++){
				var obj = {};

				obj.thumb = $scope.project.images[i];
				obj.img = $scope.project.images[i];
				obj.description = 'Imagen 1';
			}*/
			};

			var competitionData = shareProjectService.getProject();
			var projectData = shareProjectService.getProjectDetail();
			getProject(competitionData.id, projectData.id);


		}]);	
})();