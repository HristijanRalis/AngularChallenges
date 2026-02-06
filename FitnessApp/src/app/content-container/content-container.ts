import { Component } from '@angular/core';
import { RelatedContent } from "./related-content/related-content";
import { Card } from "../card/card";
import { TrendingCollage } from "./trending-collage/trending-collage";

@Component({
  selector: 'app-content-container',
  standalone: true,
  imports: [RelatedContent, Card, TrendingCollage],
  templateUrl: './content-container.html',
  styleUrl: './content-container.css',
})
export class ContentContainer {

}
