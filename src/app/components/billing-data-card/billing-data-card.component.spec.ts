import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDataCardComponent } from './billing-data-card.component';

describe('BillingDataCardComponent', () => {
  let component: BillingDataCardComponent;
  let fixture: ComponentFixture<BillingDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingDataCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillingDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
