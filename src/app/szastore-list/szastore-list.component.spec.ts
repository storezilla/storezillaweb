import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SZAStoreListComponent } from './szastore-list.component';

describe('SZAStoreListComponent', () => {
  let component: SZAStoreListComponent;
  let fixture: ComponentFixture<SZAStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SZAStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SZAStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
