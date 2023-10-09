import { Component, Output, EventEmitter } from '@angular/core';
import options from '../../../assets/data/options.json'
import { Option } from 'src/app/interfaces/option';

@Component({
  selector: 'app-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.css']
})
export class OptionsContainerComponent{
  @Output() EmitterResult: EventEmitter<string> = new EventEmitter()
  @Output() EmitterComputerChoice: EventEmitter<string> = new EventEmitter()
  @Output() EmitterFinished: EventEmitter<boolean> = new EventEmitter()
  
  options: Option[] = options.options
  choices: string[] = ['pedra', 'papel', 'tesoura']
  computerIndex?: number
  playerIndex?: number
  result?: string
  finished: boolean = false
  computerChoice?: string
  
  onPlayerChoice(value: number){
    this.computerIndex = this.botMove()
    this.playerIndex = value

    if(this.computerIndex === 0 && this.playerIndex === 2 || this.computerIndex === 1 && this.playerIndex === 0 || this.computerIndex === 2 && this.playerIndex === 1){
      this.result = options.results["A"]
    }
    else if(this.computerIndex === this.playerIndex){
      this.result = options.results["C"]
    }
    else{
      this.result = options.results["B"]
    }

    console.log(this.result)
    this.computerChoice = this.choices[this.computerIndex]
    this.finished = true

    this.EmitterResult.emit(this.result)
    this.EmitterComputerChoice.emit(this.computerChoice)
    console.log(this.finished)
    this.EmitterFinished.emit(this.finished)
  }

  botMove(): number {
    return Number((Math.random() * (2 - 0) + 0).toFixed())
  }
}
