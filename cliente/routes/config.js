/*
 *Carlos Fernandez Jimenez
*/

'use strict';
 angular
    .module('votar', [
        'ngResource',
        'ui.router',
        'ui-notification',
        'jkuri.gallery'
    ]);
    
 /*
  *Define default routes for specified view
 */
(function(){
    'use strict'
    angular
        .module('votar')
        .config(function($httpProvider, $stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('no-logged',{
                    abstract: true,
                    url: '',
                    templateUrl: '/cliente/views/no-logged.html',
                    controller: 'noLoggedController'
                })
                .state('logged',{
                    url: '/logged',
                    parent: 'no-logged',
                    templateUrl: '/cliente/views/logged.html',
                    controller: 'loggedController'
                })
                .state('home',{
                    url: '/', 
                    parent: 'no-logged',
                    templateUrl: '/cliente/views/home.html',
                    controller: 'homeController'
                })
                .state('home2',{
                    url: '/', 
                    parent: 'logged',
                    templateUrl: '/cliente/views/home.html',
                    controller: 'homeController'
                })
                .state('home.unpublished',{
                    url: '/unpublished', 
                    parent: 'home',
                    templateUrl: '/cliente/views/unpublishedCompetitions.html',
                    controller: 'unpublishedCompetitionController'
                })
                 .state('home2.unpublished',{
                    url: '/unpublished', 
                    parent: 'home2',
                    templateUrl: '/cliente/views/unpublishedCompetitions.html',
                    controller: 'unpublishedCompetitionController'
                })
                .state('home.pending',{
                    url: '/pending', 
                    parent: 'home',
                    templateUrl: '/cliente/views/pendingCompetitions.html',
                    controller: 'pendingCompetitionController'
                })
                .state('home2.pending',{
                    url: '/pending', 
                    parent: 'home2',
                    templateUrl: '/cliente/views/pendingCompetitions.html',
                    controller: 'pendingCompetitionController'
                })
                .state('home.started',{
                    url: '/started', 
                    parent: 'home',
                    templateUrl: '/cliente/views/startedCompetitions.html',
                    controller: 'startedCompetitionController'
                })
                .state('home2.started',{
                    url: '/started', 
                    parent: 'home2',
                    templateUrl: '/cliente/views/startedCompetitions.html',
                    controller: 'startedCompetitionController'
                })
                .state('home.finished',{
                    url: '/finished', 
                    parent: 'home',
                    templateUrl: '/cliente/views/finishedCompetitions.html',
                    controller: 'finishedCompetitionController'
                })
                .state('home2.finished',{
                    url: '/finished', 
                    parent: 'home2',
                    templateUrl: '/cliente/views/finishedCompetitions.html',
                    controller: 'finishedCompetitionController'
                })
                .state('projects',{
                    url: '/projects', 
                    parent: 'no-logged',
                    templateUrl: '/cliente/views/projects.html',
                    controller: 'projectsController'
                })
                .state('project',{
                    url: '/project', 
                    parent: 'no-logged',
                    templateUrl: '/cliente/views/project.html',
                    controller: 'projectController'
                })
                .state('projects2',{
                    url: '/projects2', 
                    parent: 'no-logged',
                    templateUrl: '/cliente/views/projects.html',
                    controller: 'projectsController'
                })
                .state('login',{
                    url: '/login', 
                    parent: 'no-logged',
                    templateUrl: '/cliente/views/login.html'
                })
                .state('logout',{
                    controller: 'logoutController'
                })
                .state('about',{
                    url: '/about', 
                    parent: 'no-logged',
                    templateUrl: '/cliente/views/about.html'
                });
        });	
})();