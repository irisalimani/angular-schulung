import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyContractsCardComponent } from './supply-contracts-card.component';

describe('SupplyContractsCardComponent', () => {
  let component: SupplyContractsCardComponent;
  let fixture: ComponentFixture<SupplyContractsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyContractsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplyContractsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
