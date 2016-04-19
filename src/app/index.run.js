export function runBlock ($log, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  /**
   * Set title for each page
   */
  $rootScope.$on('$routeChangeStart', function (event, current) {
    if (current.hasOwnProperty('$route')) {
      $rootScope.title = current.$route.title;
    }
  });
}
