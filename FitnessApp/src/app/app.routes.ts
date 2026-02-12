import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sports } from './pages/sports/sports';
import { Racing } from './pages/racing/racing';
import { Swimming } from './pages/swimming/swimming';
import { Contact } from './pages/contact/contact';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  {
    path: 'sport',
    component: Sports,
  },
  { path: 'racing', component: Racing },
  {
    path: 'swimming',
    component: Swimming,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'blog',
    component: Blog,
  },
];
