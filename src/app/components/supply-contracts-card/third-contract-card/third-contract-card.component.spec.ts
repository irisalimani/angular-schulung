import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdContractCardComponent } from './third-contract-card.component';

describe('ThirdContractCardComponent', () => {
  let component: ThirdContractCardComponent;
  let fixture: ComponentFixture<ThirdContractCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdContractCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdContractCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
