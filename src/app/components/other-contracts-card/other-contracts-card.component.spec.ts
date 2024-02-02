import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContractsCardComponent } from './other-contracts-card.component';

describe('OtherContractsCardComponent', () => {
  let component: OtherContractsCardComponent;
  let fixture: ComponentFixture<OtherContractsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherContractsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherContractsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
