import { Injectable } from '@angular/core';

import { PageModel } from '../../';
import { Http, Response } from '@angular/http';

@Injectable()
export class PageService {

  //  constructor() { }
  // getPages() : Promise<PageModel[]> {
  //   return Promise.resolve(PAGES);
  // }
  constructor(public http:Http) { }
    getData() : Promise<PageModel[]>{
        return //Promise.resolve(this.http.get('http://localhost:15273/api/values').subscribe((res:Response) => res.json());
    }

}
