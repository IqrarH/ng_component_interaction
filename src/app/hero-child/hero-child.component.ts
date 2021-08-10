import { Component, Input, Output } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `,
  styles: [':host { color: red; }']
})
export class HeroChildComponent {
  @Input() hero!: Hero;  
  @Input('master') masterName = ''; // tslint:disable-line: no-input-rename
  @Output() message =  '';  //Passing data to parent using Output
}