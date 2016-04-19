export function config ($logProvider, $httpProvider) {
  'ngInject';

  // Enable CORS
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
}
