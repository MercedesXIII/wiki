import { Injectable } from '@angular/core';

import { PAGES } from './mock-pages';
import { PageModel } from '../../';
import { Http, Response } from '@angular/http';

@Injectable()
export class PageService {

  //  constructor() { }
  // getPages() : Promise<PageModel[]> {
  //   return Promise.resolve(PAGES);
  // }
  constructor(public http:Http) { }
    getData(){
        return this.http.get("http://localhost:15273/api/values")
        .map((res:Response) => res.json().data);
    }

}
