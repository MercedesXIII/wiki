import { Component,ViewChild, OnInit } from '@angular/core';
import { PageService } from '../shared/page.service'
import{ PageModel } from '../../'
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  
  constructor(private getPageService: PageService, private router : Router) { }
  pages:PageModel[];
  //private getPageService: PageService = new PageService
  ngOnInit() {
    this.getPages();
  }

  getPages(){
    this.getPageService.getPages().then(pages => this.pages = pages)
  }
  @ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;

    index: number = 0;
    backdropOptions = [true, false, 'static'];
    cssClass: string = '';

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;
   


    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }

    navigate() {
        this.router.navigateByUrl('/hello');
    }
    open() {
        this.modal.open();
    }



}
 