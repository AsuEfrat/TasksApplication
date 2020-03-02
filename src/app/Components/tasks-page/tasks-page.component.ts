import { Component, OnInit } from '@angular/core';
import { TasksList } from 'src/app/Models/TasksList';

import { ExcelService } from 'src/app/Services/excel.service';



@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {



tasksList:TasksList[]=[];
task:TasksList=new TasksList();//המשימה החדשה שמתווספת
exist:boolean=false;// דגל -האם משימה זו כבר קיימת או לא


constructor(private excelService:ExcelService) { }

  ngOnInit() {
   
 
}

  AddTask()//הוספת משימה
  {
  debugger
  this.exist=false;
  if(this.tasksList.length<5)//בדיקה-האם המערך קטן מחמש
   {
     for(let t of this.tasksList)
      if(t.task==this.task.task)//בדיקה האם כבר קיימת משימה כזו במערך
        this.exist=true;
     
     if(this.exist==false)
     {
     
     this.tasksList.push({task:this.task.task,TaskTime:this.task.TaskTime});
      
     }
     else
      alert("כבר קיימת משימה כזו ברשימה");
  } 
  else
    alert("מצטערים. לא ניתן להוסיף יותר מחמש משימות");
  }

  delete(task:TasksList)
  {
   debugger
   this.tasksList.splice(this.tasksList.indexOf(task),1);
   
  }

  exportAsXLSX():void {
    debugger
      this.excelService.exportAsExcelFile(this.tasksList,'tasks');
}


}
