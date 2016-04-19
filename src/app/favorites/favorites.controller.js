export class FavoritesController {
  constructor($log, localStorageService) {
    'ngInject';
    this.movies = [];
    this.$log = $log;
    this.localStorageService = localStorageService;
    this.activate();
  }


  activate() {
    this.getMovies();
  }

  getMovies() {
    this.movies = angular.fromJson(this.localStorageService.get('favorites'));
  }


}
