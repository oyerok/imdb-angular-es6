export function CardDirective() {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/card/card.html',
    scope: {
      movie: '=',
      favorites: '=movies'
    },
    controller: CardController,
    link: linkFunction,
    controllerAs: 'vm',
    bindToController: true
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

    // "this.creationDate" is available by directive option "bindToController: true"
  }
  activate() {

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
    if (this.favorites) {
      for (var i = this.favorites.length - 1; i > -1; i--) {
        if (this.favorites[i]['idIMDB'] == item.idIMDB) {
          this.favorites.splice(i, 1);
        }
      }
      alert(item.title + ' has been removed from your favorites');
      this.localStorageService.set('favorites', angular.toJson(this.favorites));
    }
  }
}
