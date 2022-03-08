import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_modle/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private StudentADD:StudentService) { }

  newStudent:Student=new Student(0,"","",0,"");
  save(stu:Student){
    this.StudentADD.addNewStudent(stu);

  }

  ngOnInit(): void {
  }

}
