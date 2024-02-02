import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContractCardComponent } from './first-contract-card.component';

describe('FirstContractCardComponent', () => {
  let component: FirstContractCardComponent;
  let fixture: ComponentFixture<FirstContractCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstContractCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstContractCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
