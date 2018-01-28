import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SZACategoryListComponent } from './category-list.component';

describe('SZACategoryListComponent', () => {
  let component: SZACategoryListComponent;
  let fixture: ComponentFixture<SZACategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SZACategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SZACategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
