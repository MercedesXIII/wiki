import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PageService } from '../../shared/page.service'
import{ PageModel } from '../../shared/page.model'

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss']
})
export class EditdataComponent implements OnInit {

  id:number;


  constructor(private getPageService: PageService,private route : ActivatedRoute) { 
    route.params.subscribe(params => {this.id = params['id']});
  }
  pages:PageModel[];
  //private getPageService: PageService = new PageService
  ngOnInit() {
    this.getPages();
  }

  getPages(){
    this.getPageService.getPages().then(pages => this.pages = pages)
  }

}
