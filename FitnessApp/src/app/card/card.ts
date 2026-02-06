import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() description!: string;
}
