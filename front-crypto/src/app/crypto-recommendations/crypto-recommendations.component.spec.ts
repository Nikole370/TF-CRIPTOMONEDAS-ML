import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoRecommendationsComponent } from './crypto-recommendations.component';

describe('CryptoRecommendationsComponent', () => {
  let component: CryptoRecommendationsComponent;
  let fixture: ComponentFixture<CryptoRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
