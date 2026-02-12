import { Component } from '@angular/core';
import { Card } from "../../card/card";
import { TrendingCollage } from "../../content-container/trending-collage/trending-collage";
import { RelatedContent } from "../../content-container/related-content/related-content";

@Component({
  selector: 'app-home',
  imports: [Card, TrendingCollage, RelatedContent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
