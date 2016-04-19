import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { IMDB } from './index.constants';
import { HomeController } from '../app/home/home.controller';
import { MoviesByYearsController } from '../app/movies-by-years/movies-by-years.controller';
import { FavoritesController } from '../app/favorites/favorites.controller';
import { ImdbService } from '../app/components/imdb/imdb.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { CardDirective } from '../app/components/card/card.directive';

angular
  .module('imdb', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ui.router',
    'anim-in-out',
    'googlechart',
    'LocalStorageModule',
    'ngLodash'
    ])
  .constant('IMDB', IMDB)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('imdb', ImdbService)
  .controller('HomeController', HomeController)
  .controller('MoviesByYearsController', MoviesByYearsController)
  .controller('FavoritesController', FavoritesController)
  .directive('imdbNavbar', NavbarDirective)
  .directive('imdbCard', CardDirective)
