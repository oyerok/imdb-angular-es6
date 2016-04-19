export class HomeController {
  constructor ($log, imdb) {
    'ngInject';
    this.$log = $log;
    this.movies = [];
    this.activate(imdb);
  }

  activate(imdb) {
    this.getMovies(imdb);
  }

  getMovies(imdb) {
    imdb.fetchAllFromLocal().then((data) => {
      this.movies = data.movies;
    });
  }
}
