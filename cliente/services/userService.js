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
        .factory('userService', [
            'handlerRequest',
            function(handlerRequest){
                
                var loginUser = function(pData){
                    return {
                                error: false,
                                message: "Exitoso",
                                params: {
                                    id: 1,
                                    username: "carlos"
                                }
                           }
                    

                };

                var signup = function(pData){
                    var url = '';
                    
                    return handlerRequest.create(url, pData).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };
           
                return  {
                            login: function(pData){
                                return loginUser(pData);             
                            },
                            signup: function(pData){
                                return signup(pData);
                            }
                        };
        }]);
})();