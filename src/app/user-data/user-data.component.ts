import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/service/admin.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit{
   users: any[]= [];

   constructor(private httpServe: AdminService){}


  //  ngOnInit(): void {
  //   this.httpServe.get()
  //     .subscribe((response: any) => {
  //       this.data = response;
  //       console.log(this.data); // Use the fetched data as per your requirement
  //     });
  // }

  

  // editbtn(){

  // }

  // deletebtn(){
  //   this.users = []
  // }







  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    // Call the service method to fetch user data
    this.httpServe.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  editbtn(user: any) {
    // Implement edit functionality here
    console.log('Edit user:', user);
  }

  deletebtn(user: any) {
    // Implement delete functionality here
    console.log('Delete user:', user);
  }
}



