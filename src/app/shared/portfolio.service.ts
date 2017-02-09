import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from './constants';

@Injectable()
export class PortfolioService {
  model: string = '/portfolios';
  data: any;
  constructor(private http: Http) {}

  get url() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  cacheData(results) {
    this.data = results.data;
    return this.data;
  };

  all() {
    return this.http.get(this.url);
  };

  create(portfolio) {
    return this.http.post(this.url, portfolio);
  };

  update(portfolio) {
    return this.http.put(this.url + '/' + portfolio.id, portfolio);
  };

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  };

  // setCurrentPortfolio(portfolio) {
  //   $rootScope.$broadcast('setPortfolio', angular.copy(portfolio));
  // };
  //
  // refreshPortfolios() {
  //   $rootScope.$broadcast('refreshPortfolios');
  // };
}

