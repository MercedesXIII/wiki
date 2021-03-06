/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditdataComponent } from './editdata.component';

describe('EditdataComponent', () => {
  let component: EditdataComponent;
  let fixture: ComponentFixture<EditdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
