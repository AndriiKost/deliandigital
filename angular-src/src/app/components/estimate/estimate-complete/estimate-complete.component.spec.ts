import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateCompleteComponent } from './estimate-complete.component';

describe('EstimateCompleteComponent', () => {
  let component: EstimateCompleteComponent;
  let fixture: ComponentFixture<EstimateCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
