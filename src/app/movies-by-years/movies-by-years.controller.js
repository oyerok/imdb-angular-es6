export class MoviesByYearsController {
  constructor ($log, imdb, lodash) {
    'ngInject';
    this.$log = $log;
    this.activate(imdb, lodash);
    this.chart = {
      type: "PieChart",
      data: {
        "cols": [
          {id: "s", label: "Movies", type: "string"},
          {id: "n", label: "Years", type: "number"}
        ],
        "rows": []},
      options: {
        title: 'Movies By Years'
      }
    };
  }

  activate(imdb, lodash) {
    this.getMovies(imdb).then((data) => {
      this.setDataForChart(this.chart, data, lodash)
    })
  }

  getMovies(imdb) {
    return imdb.fetchAllFromLocal().then((data) => {
      return data.movies;
    });
  }

  setDataForChart(chart, data, _) {
    _.forOwn(_.groupBy(data, 'year'), (item, key) => {
      let title = '';
      _.forOwn(item, (movie, k) => {
        if (k > 0) {
          title += ', ' + movie.title;
        } else {
          title = movie.title;
        }
        return true;
      });
      chart.data.rows.push({
        c: [
          {v: `${key}, (${title})`},
          {v: item.length}
        ]
      });
    })
  }
}
