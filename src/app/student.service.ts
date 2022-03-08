import { Injectable } from '@angular/core';
import { Student } from './_modle/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  students:Student[]=[
    
  ]
  constructor() { }

  // get student function that use in list component
  getAllStudent(){
    return this.students;
  }

  // Add student function that use in Add component

    addNewStudent(stu:Student){
      this.students.push(new Student(stu.studentId,stu.studentName,stu.studentGrade,stu.studentAge,stu.studentAddress));

    }

  // Edit student Data function that use in Listcomponent
    editFlag:number=0;
    modifiedData:Student=new Student(0,"","",0,"");
    
  edit(ID:number){
       this.editFlag=1;
       console.log(" from service ts "+ this.editFlag)

      for(let i=0;i<this.students.length ;i++){
        if(this.students[i].studentId==ID){
         //  this.modifiedData=this.students[i];  # this way cause problem not effective
          this.modifiedData.studentId=this.students[i].studentId;
          this.modifiedData.studentName=this.students[i].studentName;
          this.modifiedData.studentGrade=this.students[i].studentGrade;
          this.modifiedData.studentAge=this.students[i].studentAge;
          this.modifiedData.studentAddress=this.students[i].studentAddress;
          return;
        }
      }
    }

   // Edit student Data function that use in Editcomponent
   saveEdit(Id:number){
      for(let i=0;i<this.students.length ;i++){
        if(this.students[i].studentId==Id){
          //  this.students[i]=this.modifiedData;  # this way cause problem autochange
          this.students[i].studentId=this.modifiedData.studentId;
          this.students[i].studentName= this.modifiedData.studentName;
          this.students[i].studentGrade=this.modifiedData.studentGrade;
          this.students[i].studentAge= this.modifiedData.studentAge;
          this.students[i].studentAddress= this.modifiedData.studentAddress;
          this.editFlag=0;
           return;
        }
   }


  }

}
