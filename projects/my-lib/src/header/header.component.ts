import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-my-lib',
  template: `
    <p>
      my- header works!
    </p>
  `,
  styles: [
  ]
})
export class headerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
