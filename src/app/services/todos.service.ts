import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos:Todo[] = []
  completed:boolean = false

  constructor() { 
    let storedTodos = localStorage.getItem('todos')

    if(storedTodos) {
      this.todos = JSON.parse(storedTodos)
    } else {
      this.todos = []
    }
  }

  completedTdo:any
  incompleted:any


  addTodo(title:string) {
    this.todos.push({
      title,
      completed: this.completed
    })
    this.storedTodos()

  }
 
  deleteTodo(i:number) {
    this.todos.splice(i, 1)
    this.storedTodos()


  }
    getAllTodos() {
     return this.todos
    //  console.log(this.todos)
    }

  incompletedTodos() {
    this.storedTodos()
    
   return this.incompleted  = this.todos.filter(todo => todo.completed == false)
  //  console.log(this.incompleted)
  }
  completedTodos() {
    this.storedTodos()
   return this.completedTdo  = this.todos.filter(todo => todo.completed == true)
  //  console.log(this.completedTdo)
  }


  updateTodo(id:any, item:any) {
    this.todos[id] = item
  }

  storedTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }


}
