import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_modle/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  //  show:boolean=false;
  editFlagStatues:number=0;
  constructor(public stu:StudentService) { }

  show():boolean{
    this.editFlagStatues=this.stu.editFlag;

    if(this.editFlagStatues==1){
      return true;
    }else{

      return false;

    }
  }
  studentDataSelected:Student=this.stu.modifiedData;

  saveEdit(stuID:number){
    this.stu.saveEdit(stuID);
    
  }

  ngOnInit(): void {

  }

  
}
