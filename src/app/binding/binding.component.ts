import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  currentComponent: string= 'Roles  '

  addEvent(data:any){
    this.currentComponent = data;
  }

}
