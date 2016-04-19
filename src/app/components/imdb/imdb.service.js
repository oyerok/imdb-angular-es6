export class ImdbService {
  constructor($log, $http, IMDB) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = IMDB.API_END_POINT;
    this.token = IMDB.token;
  }

  /**
   * Fetch data from API
   * @param {Number} start
   * @param {Number} end
   * @returns {Promise.<T>}
   */
  fetchAll(start = 1, end = 20) {
    return this.$http.get(this.apiHost + '/imdb/top?data=1&format=json&start=' + start + '&end=' + end + '&token=' + this.token)
      .then((response) => {
        this.$log.debug('fetchAll is done');
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getting movies.\n' + angular.toJson(error.data, true));
      });
  }

  /**
   * Fetch from local file
   * @returns {Promise.<T>}
   */
  fetchAllFromLocal() {
    return this.$http.get('/assets/json/imdb.json')
      .then((response) => {
        this.$log.debug('fetchAllFromLocal is done');
        return response.data.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getting movies.\n' + angular.toJson(error.data, true));
      });
  }

  /**
   * Fetching trailer for movie
   *  @param {String} film
   *  @param {Number} count
   * @returns {Promise.<T>}
   */
  fetchTrailerForMovie(film, count=1) {
    return this.$http.get(
      this.apiHost + '/trailerAddict/taapi?credit=&format=json&count=' + count + '&film=' + film + '&token' + this.token)
      .then((response) => {
        this.$log.debug(`Fetch trailer for "${film}" is done`);
        return response.data;
      })
      .catch((error) => {
        this.$log.error(`XHR Failed for getting trailer for "${film}" .\n` + angular.toJson(error.data, true));
      });
  }
}
