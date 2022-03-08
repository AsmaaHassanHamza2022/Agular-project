import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { ListStudentComponent } from './Student/list-student/list-student.component';
import { EditStudentComponent } from './Student/edit-student/edit-student.component';
import { DetailsStudentComponent } from './Student/details-student/details-student.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentComponent,
    EditStudentComponent,
    DetailsStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
