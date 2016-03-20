/*
 *Carlos Fernandez Jimenez
*/
 
 /*user handler request
 *handler request to validate user credentials
 */
 
(function(){
    'use strict';
    angular
        .module('votar') 
        .factory('competitionService', [
            'handlerRequest',
            function(handlerRequest){
                
                var getCompetitions = function(){
                    var url = 'http://172.26.92.45:3000/api/competitions';
                    
                    return  handlerRequest.retrieve(url).then(function(pResp){
                                return pResp.data; 
                            },  
                            function(pResp){
                                return pResp.data;   
                            });
                };

                var getProjects = function(pId){
                    var url = 'http://172.26.92.45:3000/api/competitions/'+pId+'/projects';
                    
                    return  handlerRequest.retrieve(url).then(function(pResp){
                                return pResp.data; 
                            },  
                            function(pResp){
                                return pResp.data;   
                            });
                };

                var getCompetition = function(pId){
                    var url = 'http://172.26.92.45:3000/api/competitions/'+pId;
                    
                    return  handlerRequest.retrieve(url).then(function(pResp){
                                return pResp.data; 
                            },  
                            function(pResp){
                                return pResp.data;   
                            });
                };

                var getProject = function(pId, pId2){
                    var url = 'http://172.26.92.45:3000/api/competitions/'+pId+'/projects/'+pId2;
                    
                    return  handlerRequest.retrieve(url).then(function(pResp){
                                return pResp.data; 
                            },  
                            function(pResp){
                                return pResp.data;   
                            });
                };
           
                return  {
                            getAllCompetition: function(){
                                return getCompetitions();             
                            },
                            getAllProjects: function(pId){
                                return getProjects(pId);             
                            },
                            getCompetition: function(pId){
                                return getCompetition(pId);             
                            },
                            getProject: function(pId, pId2){
                                return getProject(pId, pId2);             
                            }
                            
                        };
        }]);
})();