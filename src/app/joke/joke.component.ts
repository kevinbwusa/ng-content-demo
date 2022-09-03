import { Component, Input, OnInit } from '@angular/core';
import {Joke} from '../common/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input("joke") data: Joke | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
