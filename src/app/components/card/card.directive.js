export function CardDirective() {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/card/card.html',
    scope: {
      movie: '='
    },
    controller: CardController,
    link: linkFunction,
    controllerAs: 'vm'
    //bindToController: true
  };
  return directive;
}
function linkFunction(scope, element) {

}

class CardController {
  constructor ($log, imdb, localStorageService, lodash, $state) {
    'ngInject';
    this.$log = $log;
    this.imdb = imdb;
    this.localStorageService = localStorageService;
    this._ = lodash;
    this.$state = $state;
    this.activate(this.$state);
    this.visible = null;
    this.isFavorite = null;


    // "this.creationDate" is available by directive option "bindToController: true"
  }
  activate(state) {
    if (state.current.name == 'home') {
     this.visible = true;
    }
  }

  getFavorites() {
    return this.localStorageService.get('favorites');
  }

  addToFavorites(item) {
    this.$log.debug(item, 'Add to Favorites');
    let favorites = angular.fromJson(this.getFavorites()) || [];
    favorites.push(item);
    alert(item.title + ' has been added to your favorites');
    this.localStorageService.set('favorites', angular.toJson(favorites));
  }

  removeFromFavorites(item) {
    let favorites = angular.fromJson(this.getFavorites()) || [];
    for (var i = favorites.length - 1; i > -1; i--) {
      if (favorites[i].idIMDB == item.idIMDB) {
        favorites.splice(i, 1);
      }
    }
    this.$log.debug(favorites, 'Fav');
    alert(item.title + ' has been removed from your favorites');
    this.localStorageService.set('favorites', angular.toJson(favorites));

  }

  //isFavorite() {
  //  //this.$log.debug(this.movie.idIMDB);
  //  let favorites = angular.fromJson(this.getFavorites()) || [];
  //  this.$log.debug(favorites);
  //  favorites.forEach((item, i) => {
  //    this.$log.debug(favorites[i].idIMDB == this.movie.idIMDB);
  //    if (item.idIMDB == this.movie.idIMDB) {
  //      return true;
  //    }
  //  })
  //    //favorites.some((current) => {
  //    //  //this.$log.debug(this.movie.idIMDB == current.idIMDB, 'movie.idIMDB == current.idIMDB');
  //    //  return this.movie.idIMDB == current.idIMDB;
  //    //})
  //}
}
