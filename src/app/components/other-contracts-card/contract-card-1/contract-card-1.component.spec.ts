import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCard1Component } from './contract-card-1.component';

describe('ContractCard1Component', () => {
  let component: ContractCard1Component;
  let fixture: ComponentFixture<ContractCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractCard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
