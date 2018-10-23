import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmentListComponent } from './depatment-list.component';

describe('DepatmentListComponent', () => {
  let component: DepatmentListComponent;
  let fixture: ComponentFixture<DepatmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepatmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
