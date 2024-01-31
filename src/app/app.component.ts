import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-1';

  showFirstDiv : boolean  = true;
  showSecondDiv: boolean = false;
  toggleDiv(selectedValue: string){
    this.showFirstDiv= selectedValue === 'first';
    this.showSecondDiv = selectedValue === 'second';
  }

}
