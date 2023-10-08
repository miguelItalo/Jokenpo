import { Component, OnInit } from '@angular/core';
import options from '../../../assets/data/options.json'

@Component({
  selector: 'app-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.css']
})
export class OptionsContainerComponent implements OnInit {
  options: any = options.options

  ngOnInit(): void {
    console.log(options)
  }
}
