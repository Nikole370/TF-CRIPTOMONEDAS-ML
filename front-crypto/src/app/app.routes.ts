import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CryptoRecommendationsComponent } from './crypto-recommendations/crypto-recommendations.component';
import { InvestmentSimulationComponent } from './investment-simulation/investment-simulation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelInfoComponent } from './model-info/model-info.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recomendaciones', component: CryptoRecommendationsComponent },
  { path: 'simulacion', component: InvestmentSimulationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'modelo', component: ModelInfoComponent },
  { path: 'detalle/:id', component: CryptoDetailComponent }, // con parámetro
];
