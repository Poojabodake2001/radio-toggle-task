import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  today: Date = new Date();
  users: any;
  DOB : any;
  constructor(private router: Router){}
  
   addToTable(list: any) {
      // console.log(list);
      // this.users.push({ ...list })
      // console.log(this.users);

      console.log('Form submitted');
      this.router.navigate(['/add-user']); 
  
    }
  
}
