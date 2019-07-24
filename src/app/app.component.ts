import { Component } from '@angular/core';
 
import { Hero } from './hero';
 
@Component({
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
 
 
  title = 'Test Application';
  heroes = [
    new Hero(1, 'Khali'),
    new Hero(13, 'Bali'),
    new Hero(15, 'Ho gya'),
    new Hero(20, 'Dil')
  ];
  myHero = this.heroes[0];
}