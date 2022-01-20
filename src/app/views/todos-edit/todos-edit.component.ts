import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css']
})
export class TodosEditComponent implements OnInit {

  todoId:any
  todo:any
  constructor(private todosService: TodosService,private route:ActivatedRoute, private router:Router,  private toastr:ToastrService) { }

  ngOnInit(): void {
    this.todoId = this.route.snapshot.paramMap.get('id')
    this.todo = this.todosService.todos[this.todoId]
  }

  updateTodo() {
    this.todosService.updateTodo(this.todoId, this.todo)
  
    this.router.navigateByUrl('/')
    this.todosService.storedTodos()
    this.toastr.success('Todo updated successfully')
    

  }
  cancel() {
    this.router.navigateByUrl('/')
  }

}
