import { Component,ViewChild, OnInit } from '@angular/core';
import { PageService } from '../shared/page.service'
import{ PageModel } from '../../'
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Http, Response ,Headers,URLSearchParams} from '@angular/http';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  data;
  constructor(private getPageService: PageService, private router : Router, public http:Http) {
    //POST
      // let headers = new Headers({ 'Content-Type': 'application/json' });
      // let body = "";
      // this.http.post("http://localhost:15273/api/values",body,{
			// headers: headers
		  // }).subscribe((res: Response) => {
			// let result = res.json();
      // this.data = result;});
    //GET
      this.http.get('http://localhost:15273/api/values').subscribe(res => this.data = res.json());
  }
  //private getPageService: PageService = new PageService
  

  ngOnInit() {
    
  }

//   getPages(){
//     this.result = this.getPageService.getData()
//   }
//   @ViewChild('modal')
//     modal: ModalComponent;
//     items: string[] = ['item1', 'item2', 'item3'];
//     selected: string;
//     output: string;

//     index: number = 0;
//     backdropOptions = [true, false, 'static'];
//     cssClass: string = '';

//     animation: boolean = true;
//     keyboard: boolean = true;
//     backdrop: string | boolean = true;
//     css: boolean = false;
   


//     closed() {
//         this.output = '(closed) ' + this.selected;
//     }

//     dismissed() {
//         this.output = '(dismissed)';
//     }

//     opened() {
//         this.output = '(opened)';
//     }

//     navigate() {
//         this.router.navigateByUrl('/hello');
//     }
//     open() {
//         this.modal.open();
//     }



}
 