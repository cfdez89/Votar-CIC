/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
*/
 
 /* 
 *handler request manager for CRUD operations (create, retrieve, update, delete)
 */
 
(function(){
    'use strict';
	angular
		.module('votar')
		.service('handlerRequest', [ '$http', 
			function($http){
				return {
				    create: function(pUrl, pData){
					    return $http({
							        method: "POST",
								    url: pUrl,
								    data: pData,
									headers: { 'Content-Type': 'application/json' }
								});
					},
					retrieve: function(pUrl){
						return $http({
							        method: "GET",
								    url: pUrl,
									headers: { 'Content-Type': 'application/json' }
								});
					},
					update: function(pUrl, pData){
						return $http({
							        method: "PUT",
								    url: pUrl,
								    data: pData,
									headers: { 'Content-Type': 'application/json' }
								});
					},
					delete: function(pUrl){
						return $http({
							        method: "DELETE",
								    url: pUrl,
									headers: { 'Content-Type': 'application/json' }
								});
					}
				};
		    }]);
})();