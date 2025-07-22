import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule} from '@angular/common/http';
import { UserDataComponent } from './user-data/user-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminService } from './shared/service/admin.service';
import { UserFormComponent } from './user-form/user-form.component';
import { BindingComponent } from './binding/binding.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserDataComponent,
    UserFormComponent,
    BindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
