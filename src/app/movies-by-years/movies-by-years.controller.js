export class MoviesByYearsController {
  constructor ($log, imdb, lodash) {
    'ngInject';
    this.$log = $log;
    this._ = lodash;
    this.activate(imdb, lodash);
    this.chart = {
      type: "PieChart",
      data: {
        "cols": [
          {id: "s", label: "Movies", type: "string"},
          {id: "n", label: "Decade", type: "number"}
        ],
        "rows": []},
      options: {
        title: 'Movies By Decade'
      }
    };
  }

  activate(imdb) {
    this.getMovies(imdb).then((data) => {
      this.setDataForChart(this.chart, data)
    })
  }

  getMovies(imdb) {
    return imdb.fetchAllFromLocal().then((data) => {
      return data.movies;
    });
  }

  setDataForChart(chart, data) {
    this._.forOwn(data, (item, key) => {
      item['decade'] = Math.floor((item.year)/10)*10;
    });
    this._.forOwn(_.groupBy(data, 'decade'), (item, key) => {
      let title = '';
      this._.forOwn(item, (movie, k) => {
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
