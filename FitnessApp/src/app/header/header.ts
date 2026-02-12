import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { HamburgerMenu } from '../hamburger-menu/hamburger-menu';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, HamburgerMenu, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  faBars = faBars;
  faXmark = faXmark;

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
