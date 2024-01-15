import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Fabio Godoy';
  public age = 25;
  public isDisabled = true;
  public srcValue = 'https://github.com/fabiobatoni.png';
  public isTextDecoration = this.age >= 25 ? 'underline' : 'none';

  constructor(){
    setTimeout(() =>{
      this.name = 'Fabio Batoni'
    }, 1000)
  }

  public sum(val1: number, val2:number) {
    return val1 + val2;
  }
}
