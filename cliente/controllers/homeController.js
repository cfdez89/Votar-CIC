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
	    .controller('homeController', ['$scope','$state', 'notificationService', 
	    function($scope, $state, notificationService){

	    	/* tags disponibles para filtrar */
			$scope.tagOptions = [
				{ tag: "unpublished", id: 1 }, 
				{ tag: "pending", id: 2 }, 
				{ tag: "started", id: 3 },
				{ tag: "finished", id: 4}
			];

			/*Tag seleccionado para filtar*/
			$scope.selectedTag = $scope.tagOptions[0]; 



		}]);	
})();