import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {Joke} from '../common/joke';
import {JokeComponent} from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit, AfterContentInit, AfterViewInit {
  jokes: Joke[] = [
    new Joke(
      "What did the cheese say when it looked in the mirror",
      "Hello-me (Halloumi)"
    ),
    new Joke(
      "What kind of cheese do you use to disguise a small horse",
      "Mask-a-pony (Mascarpone)"
    )
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent | undefined;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent> | undefined;
  @ViewChild("header") headerEl: ElementRef | undefined;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent | undefined;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`
    );
    console.log(this.jokeContentChild);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);

    let jokes: JokeComponent[] = this.jokeViewChildren!.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl!.nativeElement.textContent = "Best Joke Machine";
  }
}
