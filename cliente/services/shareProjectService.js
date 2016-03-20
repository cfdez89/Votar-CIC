/*
 *Carlos Fernandez Jimenez
*/

 
(function(){
    'use strict';
    angular
        .module('votar') 
        .service('shareProjectService', function(){

            var setCurrentProject = function(pData){
                var projectData = JSON.stringify(pData);
                sessionStorage.setItem('team', projectData);
            };

            var getCurrentProject = function(){
                var projectData = JSON.parse(sessionStorage.getItem('team'));
                return projectData;
            };

             var setCurrentProjectDetail = function(pData){
                var projectData = JSON.stringify(pData);
                sessionStorage.setItem('project', projectData);
            };

            var getCurrentProjectDetail = function(){
                var projectData = JSON.parse(sessionStorage.getItem('project'));
                return projectData;
            };
           
            return  {
                        setProject: function(pData){
                            return setCurrentProject(pData);             
                        },
                        getProject: function(){
                            return getCurrentProject();
                        },
                        setProjectDetail: function(pData){
                            return setCurrentProjectDetail(pData);             
                        },
                        getProjectDetail: function(){
                            return getCurrentProjectDetail();
                        }
                    };
        });
})();