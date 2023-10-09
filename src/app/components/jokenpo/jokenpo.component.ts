import { Component } from '@angular/core';

@Component({
  selector: 'app-jokenpo',
  templateUrl: './jokenpo.component.html',
  styleUrls: ['./jokenpo.component.css']
})
export class JokenpoComponent {
  result: string = ''
  computerChoice: string = ''
  isFinished: boolean = false

  onResult(result: string): void {
    this.result = result
  }

  onComputerChoice(computerChoice: string): void {
    this.computerChoice = computerChoice
  }

  onFinished(finished: boolean): void {
    this.isFinished = finished
  }
  
  onReset(value: boolean): void {
    this.isFinished = false
  }
}
