import { Component } from '@angular/core';
import { RelatedContent } from "./related-content/related-content";

@Component({
  selector: 'app-content-container',
  imports: [RelatedContent],
  templateUrl: './content-container.html',
  styleUrl: './content-container.css',
})
export class ContentContainer {

}
