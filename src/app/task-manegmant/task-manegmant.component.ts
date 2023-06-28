import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../Task';



@Component({
  selector: 'app-task-manegmant',
  templateUrl: './task-manegmant.component.html',
  styleUrls: ['./task-manegmant.component.css']
})
export class TaskManegmantComponent implements OnInit {
 
  tasks:Task[]=[];
  

  constructor( private  tasksService  : TasksService ) { }

  ngOnInit(): void {

    this.tasksService.getTasks().subscribe((tasks: Task[])=>{
      this.tasks=tasks
    }) 
  }

  deleteTask(task:Task){
    this.tasksService.deleteTask(task).subscribe (()=>{ this.tasks=this.tasks.filter( (t) => t.id !== task.id)
    })
      }

      toggleReminder(task:Task){

        task.reminder = !task.reminder;
        this.tasksService.updateToggleReminder(task).subscribe();
      }
 

      addTask(task:Task){
        this.tasksService.addNewTask(task).subscribe((task)=>{
          this.tasks.push(task)
        })
      }

}
