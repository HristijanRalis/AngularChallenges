import { Component } from '@angular/core';
import { SportTag } from "../tags/sport-tag/sport-tag";
import { SearchGroup } from "../inputGroups/search-group/search-group";

@Component({
  selector: 'app-footer',
  imports: [SportTag, SearchGroup],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
