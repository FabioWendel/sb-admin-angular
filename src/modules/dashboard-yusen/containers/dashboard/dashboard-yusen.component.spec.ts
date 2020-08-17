import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardYusenComponent } from './dashboard-yusen.component';

describe('DashboardYusenComponent', () => {
  let component: DashboardYusenComponent;
  let fixture: ComponentFixture<DashboardYusenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardYusenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardYusenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
