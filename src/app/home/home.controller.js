export class HomeController {
  constructor ($log, imdb, localStorageService) {
    'ngInject';
    this.$log = $log;
    this.movies = [];
    this.favorites = [];
    this.localStorageService = localStorageService;
    this.activate(imdb);
  }

  activate(imdb) {
    this.getMovies(imdb);
    this.favorites = angular.fromJson(this.getFavorites())
  }

  getMovies(imdb) {
    imdb.fetchAllFromLocal().then((data) => {
      this.movies = data.movies;
    });
  }

  getFavorites() {
    if (this.localStorageService.get('favorites')) {
      return this.localStorageService.get('favorites')
    } else {
      return [];
    }
  }


}
