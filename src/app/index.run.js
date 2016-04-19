export function runBlock ($log, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  /**
   * Set title for each page
   */
  $rootScope.$on('$stateChangeStart', function (event, current) {
    if (current.hasOwnProperty('title')) {
      $rootScope.title = current.title;
    }
  });
}
