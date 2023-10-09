import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() result?: string
  @Input() computerChoice?: string
  @Output() reset: EventEmitter<boolean> = new EventEmitter

  onClick(value: boolean){
    this.reset.emit(value)
  }
}
