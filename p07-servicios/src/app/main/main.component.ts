import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container">
      <article class="row alto">
        <app-mock-libros class="col"></app-mock-libros>
        <app-mock-libros-async class="col"></app-mock-libros-async>
      </article>
    </div>
  `,
  styles: [
    '.alto {min-height: 10rem}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
