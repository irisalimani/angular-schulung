import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondContractCardComponent } from './second-contract-card.component';

describe('SecondContractCardComponent', () => {
  let component: SecondContractCardComponent;
  let fixture: ComponentFixture<SecondContractCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondContractCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondContractCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
