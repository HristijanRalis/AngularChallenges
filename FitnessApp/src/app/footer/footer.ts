import { Component } from '@angular/core';
import { SportTag } from "../tags/sport-tag/sport-tag";

@Component({
  selector: 'app-footer',
  imports: [SportTag],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
