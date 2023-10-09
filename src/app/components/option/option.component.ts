import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/interfaces/option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {
  @Output() playerChoice: EventEmitter<number> = new EventEmitter()
  @Input() option: Option = {
    "id": 1,
    "img": "a",
    "name": "ROCK",
    "index": 0,
    "color": "var(--blue)"
  }

  handleclick(value: number){
    this.playerChoice.emit(value)
  }
}
