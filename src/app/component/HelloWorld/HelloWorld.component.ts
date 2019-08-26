import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  templateUrl: './HelloWorld.component.html',
  styleUrls: ['./HelloWorld.component.scss']
})
export class HelloWorldComponent {
  constructor() { }
  @Input() start: number;
  @Input() end: number;

  @Input() value;

  @Output() valueEmitter = new EventEmitter();

  options: Options = {
    floor: 0,
    ceil: 250,
    showSelectionBar: true,
    animate: false,
  };

  valueChange(value: number): void {
    this.valueEmitter.emit(this.value);
  }

}
