import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCard2Component } from './contract-card-2.component';

describe('ContractCard2Component', () => {
  let component: ContractCard2Component;
  let fixture: ComponentFixture<ContractCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractCard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
