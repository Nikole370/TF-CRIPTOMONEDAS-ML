import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacionTableComponent } from './simulacion-table.component';

describe('SimulacionTableComponent', () => {
  let component: SimulacionTableComponent;
  let fixture: ComponentFixture<SimulacionTableComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
