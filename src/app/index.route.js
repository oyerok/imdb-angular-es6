export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('master', {
      abstract: true,
      views: {
        layout: {
          templateUrl: 'app/layouts/master.html'
        }
      }
    })
    .state('home', {
      url: '/',
      title: 'Home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home',
      parent: 'master'
    })
    .state('movies-by-years', {
      url: '/movies-by-years',
      title: 'Movies by years',
      templateUrl: 'app/movies-by-years/movies-by-years.html',
      controller: 'MoviesByYearsController',
      controllerAs: 'moviesByYears',
      parent: 'master'
    })
    .state('favorites', {
      url: '/favorites',
      title: 'Favorites',
      templateUrl: 'app/favorites/favorites.html',
      controller: 'FavoritesController',
      controllerAs: 'favorites',
      parent: 'master'
    });

  $urlRouterProvider.otherwise('/');
}
