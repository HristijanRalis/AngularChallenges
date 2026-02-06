import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-content',
  standalone: true,
  imports: [],
  templateUrl: './related-content.html',
  styleUrl: './related-content.css',
})
export class RelatedContent {
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() description!: string;
}
