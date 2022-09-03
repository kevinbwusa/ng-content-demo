import { Component } from '@angular/core';
import {Joke} from './common/joke';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  joke: Joke = new Joke(
    "A kid threw a lump of cheddar at me",
    "I thought ‘That’s not very mature’"
  );
}