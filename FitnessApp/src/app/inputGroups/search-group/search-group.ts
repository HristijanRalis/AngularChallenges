import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-group',
  imports: [ButtonModule, InputGroupModule, InputTextModule],
  templateUrl: './search-group.html',
  styleUrl: './search-group.css',
})
export class SearchGroup {}
