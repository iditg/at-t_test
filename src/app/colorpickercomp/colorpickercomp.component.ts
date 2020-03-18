import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-colorpickercomp',
  templateUrl: './colorpickercomp.component.html',
  styleUrls: ['./colorpickercomp.component.css']
})
export class ColorpickercompComponent implements OnInit {

  color: string;
  hexR: number;
  hexG: number;
  hexB: number;

  constructor() { this.color = ""; this.hexR = 0; this.hexG = 0; this.hexB = 0;}

  ngOnInit(): void {
  }

  @HostListener('keyup', ['$event']) onKeyPress(event) {
    
    this.hexOnly(event);
    
  }

  hexOnly(event) {
    const e = <KeyboardEvent>event;
    if (e.key === 'Tab' || e.key === 'TAB') {
      return;
    }
    if (e.key.match(/[0-9]/i) || e.key.match(/[a-f]/i) ||  e.key.match(/[A-F]/i) || e.key == "#") {
      this.color = event.target.value;
      if (this.color.length == 7) {
        this.hexR = parseInt(this.color.substr(1, 2),16);
        this.hexG = parseInt(this.color.substr(3, 2),16);
        this.hexB = parseInt(this.color.substr(5, 2),16);
      }
      
      return;
    }
    else { e.preventDefault();}
    return;
   
    
  }
  


}
