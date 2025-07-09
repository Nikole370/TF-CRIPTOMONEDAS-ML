import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-crypto-recommendations',
  standalone: true,
  imports: [FormsModule, CommonModule,MatCardModule,MatCheckboxModule],
  templateUrl: './crypto-recommendations.component.html',
  styleUrls: ['./crypto-recommendations.component.css']
})
export class CryptoRecommendationsComponent {
  monto = 1000;
  umbral = 70;

  cryptos = [
    {
      id: '1',
      nombre: 'Solana',
      narrativa: 'IA',
      probabilidad: 0.75,
      rentabilidad: 0.22,
      enlace: 'https://www.coingecko.com/es/monedas/solana',
      seleccionada: false
    },
    {
      id: '2',
      nombre: 'Pepe',
      narrativa: 'Memes',
      probabilidad: 0.83,
      rentabilidad: 0.38,
      enlace: 'https://www.coingecko.com/es/monedas/pepe',
      seleccionada: false
    }
  ];
}
