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
  checked:boolean = false

  addTodo(title:any) {
    this.todosService.addTodo(title.value)
    this.title = ''
    this.toastr.success('Todo added successfully')

 
  }

  deleteTodo(i:number) {
    this.todosService.deleteTodo(i)
    this.toastr.warning('Todo deleted successfully')

  }
  getAllTodos() {
    this.todos = this.todosService.getAllTodos()

  }
  incompletedTodos() {
    this.todos = this.todosService.incompletedTodos()
  }
  completedTodos() {
     this.todos = this.todosService.completedTodos()
  }
  

  ngOnInit(): void {
  }

}
