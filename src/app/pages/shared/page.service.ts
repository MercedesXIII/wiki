import { Injectable } from '@angular/core';

import { PAGES } from './mock-pages';
import { PageModel } from '../../';
import { Http, Response, Headers,URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class PageService {

   constructor(public http:Http) { }
    getData(){
        return this.http.get("http://localhost:15273/api/values")
        .map((res:Response) => res.json().data);
    }

  }
