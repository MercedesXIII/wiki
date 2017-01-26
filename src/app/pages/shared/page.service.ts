import { Injectable } from '@angular/core';

import { PAGES } from './mock-pages';
import { PageModel } from '../../';

@Injectable()
export class PageService {

   constructor() { }
  getPages() : Promise<PageModel[]> {
    return Promise.resolve(PAGES);
  }

}
