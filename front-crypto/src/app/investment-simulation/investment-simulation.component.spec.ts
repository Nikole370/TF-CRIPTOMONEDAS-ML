import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentSimulationComponent } from './investment-simulation.component';

describe('InvestmentSimulationComponent', () => {
  let component: InvestmentSimulationComponent;
  let fixture: ComponentFixture<InvestmentSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
