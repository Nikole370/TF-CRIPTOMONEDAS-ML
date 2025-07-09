import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { CryptoRecommendationsComponent } from './app/crypto-recommendations/crypto-recommendations.component';
import { InvestmentSimulationComponent } from './app/investment-simulation/investment-simulation.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ModelInfoComponent } from './app/model-info/model-info.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'recomendaciones', component: CryptoRecommendationsComponent },
      { path: 'simulacion', component: InvestmentSimulationComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'modelo', component: ModelInfoComponent },
    ])
  ]
});
