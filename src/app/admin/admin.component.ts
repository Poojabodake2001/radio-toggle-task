import { Component } from '@angular/core';
import { AdminService } from '../shared/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private httpServe : AdminService){}

  // onSubmit(){
  //   this.httpServe.addUserData(this.httpServe.baseUrl).subscribe((data : any)=>{
  //     console.log(data);
  //   })
  // }



  onSubmit(formData: any) {
    // Assuming formData contains the form values
    this.httpServe.addUserData(formData).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }


}
