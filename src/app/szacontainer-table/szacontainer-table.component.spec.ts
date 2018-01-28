import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SZAContainerTableComponent } from './szacontainer-table.component';

describe('SzacontainerTableComponent', () => {
  let component: SZAContainerTableComponent;
  let fixture: ComponentFixture<SZAContainerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SZAContainerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SZAContainerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
