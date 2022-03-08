import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_modle/student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(public studentList:StudentService) { }
  ngOnInit(): void {}

  // start using serves #getAllStudentMethod
  studentArr:Student[]=this.studentList.getAllStudent();
  

  // delete function
deleteStudent(stuId:number){
  let confirmtionMassageResult=confirm("Are you sure you want to delete this student");
  if(confirmtionMassageResult== true){
    for (let i=0;i<this.studentArr.length;i++){
      if(this.studentArr[i].studentId==stuId){
        this.studentArr.splice(i,1);
      }
    }
    
  }
}

//show Details function
 studentDetails:Student|null=null;
showDetails(stu:Student){
 this.studentDetails=stu;
}

// Edit data function
editData(stuId:number){
this.studentList.edit(stuId);
}


}

