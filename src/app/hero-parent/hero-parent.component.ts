
import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent {
  heroes = HEROES;  //Passing data to child
  master = 'Master';
  message = 'Output Message'
}