import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-collage',
  imports: [CommonModule],
  templateUrl: './trending-collage.html',
  styleUrl: './trending-collage.css',
})
export class TrendingCollage {
  @Input() imageSrc1!: string;
  @Input() imageSrc2!: string;
  @Input() imageSrc3!: string;
  @Input() description1!: string;
  @Input() description2!: string;
  @Input() description3!: string;
}
