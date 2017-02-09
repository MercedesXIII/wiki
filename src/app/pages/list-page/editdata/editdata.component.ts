import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PageService } from '../../shared/page.service'
import{ PageModel } from '../../shared/page.model'
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss']
})
export class EditdataComponent implements OnInit {

  id:number;
  data;

  constructor(private getPageService: PageService,private route : ActivatedRoute, public http:Http) { 
    route.params.subscribe(params => {this.id = params['id']});
    this.http.get('http://localhost:15273/api/values')
                .subscribe(res => this.data = res.json());
  }
  pages:PageModel[];
  //private getPageService: PageService = new PageService
  ngOnInit() {
    // this.getPages();
  }

  // getPages(){
  //   this.getPageService.getPages().then(pages => this.pages = pages)
  // }

}
