import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos-home',
  templateUrl: './todos-home.component.html',
  styleUrls: ['./todos-home.component.css']
})
export class TodosHomeComponent implements OnInit {

  constructor(private todosService:TodosService, private router:Router, private toastr:ToastrService) { }

  todos:Todo[] = this.todosService.todos
  title:string = ''
  completed:boolean = false
  alertMsg:any = 'No tasks found, please add One! '

  addTodo(title:any) {
    this.todosService.addTodo(title.value)
    this.title = ''
    this.toastr.success('Todo added successfully')

 
  }

  deleteTodo(i:number, title:any) {
    if(confirm("Are you sure to delete: "+title)) {
    this.todosService.deleteTodo(i)
    this.toastr.warning('Todo deleted successfully')
    }

  }
  getAllTodos() {
      this.todos = this.todosService.getAllTodos()
      return this.alertMsg = 'No tasks found, please add One! '
    


  }
  incompletedTodos() {
    this.todos = this.todosService.incompletedTodos()
    return this.alertMsg = 'No incompleted todos found! '

  }
  completedTodos() {
     this.todos = this.todosService.completedTodos()
     return this.alertMsg = 'You haven`t completed any todos yet!'

     
  }
  

  ngOnInit(): void {
  }
}
