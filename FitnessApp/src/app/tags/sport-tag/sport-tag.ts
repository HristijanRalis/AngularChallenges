import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sport-tag',
  imports: [CommonModule,ButtonModule],
  templateUrl: './sport-tag.html',
  styleUrl: './sport-tag.css',
})
export class SportTag {
  buttons = ['Fitness', 'Sport', 'Running', 'Racing', 'Cycling'];
}
