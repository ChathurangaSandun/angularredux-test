import { Component, OnInit } from '@angular/core';

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions";
import { ITodo } from '../ITodo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  model: ITodo = {
    id:0,
    description: '',
    retsposibility: '',
    priority: 'low',
    isCompleted : false
  }

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit(){
    this.ngRedux.dispatch( {type: ADD_TODO, todo: this.model} );
  }
  
  removeTodo(todo){
    debugger;
    this.ngRedux.dispatch( {type: REMOVE_TODO, id: todo.id} );
  }

}
//https://www.youtube.com/watch?v=5NWClfa8PUQ
