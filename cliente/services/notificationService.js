/*
 *Carlos Fernandez Jimenez
*/
 
 /*notification service
 *module for notify users with good or bad message
 */
 
(function(){
    'use strict';
    angular
        .module('votar') 
        .factory('notificationService', [
            'Notification',
            function(Notification){

                var delay = 6000;
                
                var setError = function(pMessage){

                    return Notification.error({message: pMessage, title: 'Mensaje de error', delay: delay});
                };

                var setSuccess = function(pMessage){

                    return Notification.success({message: pMessage, title: 'Mensaje de éxito', delay: delay});
                };

                var setInfo = function(pMessage){

                    return Notification.info({message: pMessage, title: 'Mensaje de información', delay: delay});
                };

                var setWarning = function(pMessage){

                    return Notification.warning({message: pMessage, title: 'Mensaje de advertencia', delay: delay});
                };


                return  { 
                            showError: function(pMessage){
                                return setError(pMessage);             
                            },
                            showSuccess: function(pMessage){
                                return setSuccess(pMessage);
                            },
                            showInfo: function(pMessage){
                                return setInfo(pMessage);
                            },
                            showWarning: function(pMessage){
                                return setWarning(pMessage);
                            }
                        };
        }]);
})();

