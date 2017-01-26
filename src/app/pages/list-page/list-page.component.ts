import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/page.service'
import{ PageModel } from '../../'
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(private getPageService: PageService, private router:Router,
  private route : ActivatedRoute) { }
  pages:PageModel[];
  //private getPageService: PageService = new PageService
  ngOnInit() {
    this.getPages();
  }

  getPages(){
    this.getPageService.getPages().then(pages => this.pages = pages)
  }
  goToEdit(id:number)
  {
    this.router.navigate(['./',id], {relativeTo: this.route});
  }


}
 