// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {
//   value: any;

//   constructor(private http : HttpClient){}

//   baseUrl= "https://admin-26085-default-rtdb.asia-southeast1.firebasedatabase.app/admin.json"

    
//   addUserData(res : any){
//       return this.http.post(this.baseUrl, res)
//   }



// }







import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  baseUrl = "https://admin-26085-default-rtdb.asia-southeast1.firebasedatabase.app/admin.json";



  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addUserData(res: any) {
    return this.http.post(this.baseUrl, res).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

