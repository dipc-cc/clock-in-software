import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  protocol = 'http://';
  webserver = '158.227.173.83:8080';
  api = '';
  httpOptions: any = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    observe: 'body' as "body"
  };

  constructor(private http: HttpClient) { }

  login(value) {
    let body = new URLSearchParams();
    body.set('username', value.username);
    body.set('password', value.password);
    let options = this.httpOptions;
    options.observe = 'response' as "body";
    return this.http.post(this.protocol + this.webserver + this.api + '/login', body.toString(), options);
  }

  lastclock(value) {
    let body = new URLSearchParams();
    body.set('type', value);
    let options = this.httpOptions;
    options.observe = 'response' as "body";
    return this.http.post(this.protocol + this.webserver + this.api + '/lastclock', body.toString(), options);
  }

  clock(value) {
    let body = new URLSearchParams();
    body.set('type', value);
    let options = this.httpOptions;
    options.observe = 'response' as "body";
    return this.http.post(this.protocol + this.webserver + this.api + '/clock', body.toString(), options);
  }

  issue(value) {
    let body = new URLSearchParams();
    body.set('issue', value);
    let options = this.httpOptions;
    options.observe = 'response' as "body";
    return this.http.post(this.protocol + this.webserver + this.api + '/issue', body.toString(), options);
  }

  issueform(value) {
    let body = new URLSearchParams();
    body.set('issue', value.text);
    body.set('date', moment(value.date).format('DD/MM/YYYY'));
    let options = this.httpOptions;
    options.observe = 'response' as "body";
    return this.http.post(this.protocol + this.webserver + this.api + '/issueform', body.toString(), options);
  }
}